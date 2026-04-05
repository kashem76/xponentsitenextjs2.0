// app/api/careers/apply/route.ts
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { envs } from "@/lib/envs";
import { resendConfig } from "@/lib/resend/utils";

async function appendToSheet(values: string[][]) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: envs.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: envs.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: envs.GOOGLE_SHEET_ID,
    range: "Sheet1!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

export async function POST(req: Request) {
  const {
    jobTitle,
    firstName,
    lastName,
    email,
    phone,
    address,
    linkedin,
    facebook,
    coverLetter,
  } = await req.json();

  if (
    !jobTitle ||
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !address ||
    !linkedin ||
    !facebook ||
    !coverLetter
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Dhaka",
  });
  const fullName = `${firstName} ${lastName}`;

  // ── 1. Write to Google Sheet ──────────────────────────────────────────
  try {
    await appendToSheet([
      [
        submittedAt,
        jobTitle,
        firstName,
        lastName,
        email,
        phone,
        address,
        linkedin,
        facebook,
        coverLetter,
      ],
    ]);
  } catch (err) {
    console.error("Google Sheets error:", err);
    // Don't block the response — still send emails
  }
  console.log(fullName);

  // ── 2. Thank-you email to applicant ───────────────────────────────────
  const { error: applicantEmailError } = await resendConfig.emails.send({
    from: "XPONENT Careers <contact@mail.xponent.com.bd>",
    replyTo: [envs.ADMIN_EMAIL],
    to: [email],
    subject: `Thank you for applying — ${jobTitle}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#2563eb;padding:32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:22px;color:#fff;font-weight:700">Application Received!</h1>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
          <p style="font-size:16px;margin:0 0 16px">Hi ${firstName},</p>
          <p style="font-size:15px;color:#374151;line-height:1.6;margin:0 0 16px">
            Thank you for applying for the <strong>${jobTitle}</strong> position at Xponent InfoSystem.
            We've received your application and our team will review it carefully.
          </p>
          <p style="font-size:15px;color:#374151;line-height:1.6;margin:0 0 16px">
            If your profile matches what we're looking for, we'll be in touch within 5–7 business days
            to schedule the next steps.
          </p>
          <p style="font-size:15px;color:#374151;line-height:1.6;margin:0 0 24px">
            In the meantime, feel free to explore more about us at
            <a href="https://www.xponent.com.bd" style="color:#2563eb">xponent.com.bd</a>.
          </p>
          <p style="font-size:15px;color:#374151;margin:0">
            Best regards,<br/>
            <strong>Xponent InfoSystem Team</strong>
          </p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb"/>
          <p style="font-size:12px;color:#9ca3af;margin:0">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      </div>
    `,
  });

  if (applicantEmailError) {
    console.error("Applicant email error:", applicantEmailError);
  }

  // ── 3. HR notification email ───────────────────────────────────────────
  const { error: hrEmailError } = await resendConfig.emails.send({
    from: "XPONENT Careers <contact@mail.xponent.com.bd>",
    to: ["hr@xponent.com.bd"],
    replyTo: email,
    subject: `[New Application] ${jobTitle} — ${fullName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#2563eb;padding:32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:22px;color:#fff;font-weight:700">New Job Application</h1>
          <p style="margin:8px 0 0;font-size:14px;color:#fff;opacity:0.8">${jobTitle}</p>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px 0;color:#6c757d;width:140px;vertical-align:top">Position</td>
                <td style="padding:8px 0;font-weight:600">${jobTitle}</td></tr>
            <tr><td style="padding:8px 0;color:#6c757d;vertical-align:top">Name</td>
                <td style="padding:8px 0;font-weight:600">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#6c757d;vertical-align:top">Email</td>
                <td style="padding:8px 0"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6c757d;vertical-align:top">Phone</td>
                <td style="padding:8px 0">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#6c757d;vertical-align:top">Address</td>
                <td style="padding:8px 0">${address}</td></tr>
            <tr><td style="padding:8px 0;color:#6c757d;vertical-align:top">LinkedIn</td>
                <td style="padding:8px 0"><a href="${linkedin}" style="color:#2563eb">${linkedin}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6c757d;vertical-align:top">Facebook</td>
                <td style="padding:8px 0"><a href="${facebook}" style="color:#2563eb">${facebook}</a></td></tr>
          </table>

          <div style="margin-top:24px;padding:20px;background:#f8f9fa;border-radius:8px;border-left:4px solid #2563eb">
            <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#374151;text-transform:uppercase;letter-spacing:0.05em">Cover Letter</p>
            <p style="margin:0;font-size:14px;color:#374151;white-space:pre-wrap;line-height:1.6">${coverLetter}</p>
          </div>

          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb"/>
          <p style="margin:0;font-size:12px;color:#9ca3af">Submitted on ${submittedAt} (BST)</p>
        </div>
      </div>
    `,
  });

  if (hrEmailError) {
    console.error("HR email error:", hrEmailError);
    return NextResponse.json(
      { error: "Failed to send notification." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
