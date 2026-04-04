"use client";

// components/contact/contact-content-section.tsx
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactContentSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again or email us directly.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <section className="py-20 px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Left column: contact info ── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Have a project in mind or just want to say hello? Fill out the
                form and we&apos;ll get back to you within one business day.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Office</p>
                  <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
                    Noor Building, 2nd Floor<br />
                    700/B, DT Road, Dewanhat<br />
                    Chittagong-4100, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a
                    href="tel:+8801713432880"
                    className="mt-0.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 (1713) 432 880
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:hr@xponent.com.bd"
                    className="mt-0.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    hr@xponent.com.bd
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Follow us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/xponent.infosystem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/xponent-infosystem-pvt-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Looking for a job?{" "}
              <Link href="/careers" className="text-primary font-semibold hover:underline">
                Visit our careers page
              </Link>
              .
            </p>
          </div>

          {/* ── Right column: form ── */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-card shadow-lg border border-border p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setForm(INITIAL_FORM); setSubmitted(false); }}
                    className="mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Send us a message</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                        First name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                        Last name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                        Phone <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    >
                      <option value="" disabled>Select a topic…</option>
                      <option value="project">New project inquiry</option>
                      <option value="support">Support request</option>
                      <option value="partnership">Partnership</option>
                      <option value="billing">Billing question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question…"
                      className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-60 transition-all"
                  >
                    {loading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
