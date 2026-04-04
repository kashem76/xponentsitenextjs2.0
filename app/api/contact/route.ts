// app/api/contact/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, subject, message } =
    await req.json();

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "XPONENT Contact Form <contact@mail.xponent.com.bd>",
    to: ["admin@xponent.com.bd"],
    replyTo: email,
    subject: `[Contact] ${subject} — ${firstName} ${lastName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
        <div style="background:#2563eb;padding:32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;font-size:22px;color:#fff;font-weight:700">New Contact Form Submission</h1>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr>
              <td style="padding:8px 0;color:#6c757d;width:120px;vertical-align:top">Name</td>
              <td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6c757d;vertical-align:top">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:8px 0;color:#6c757d;vertical-align:top">Phone</td>
              <td style="padding:8px 0">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:8px 0;color:#6c757d;vertical-align:top">Subject</td>
              <td style="padding:8px 0;text-transform:capitalize">${subject}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6c757d;vertical-align:top">Message</td>
              <td style="padding:8px 0;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb"/>
          <p style="margin:0;font-size:12px;color:#6c757d">Sent via the XPONENT website contact form</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
