"use client";

// components/careers/application-form.tsx
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface ApplicationFormProps {
  jobTitles: string[];
  preselectedJob?: string;
}

type FormState = {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  facebook: string;
  coverLetter: string;
};

const INITIAL_FORM = (preselected: string): FormState => ({
  jobTitle: preselected,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  linkedin: "",
  facebook: "",
  coverLetter: "",
});

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

export default function ApplicationForm({
  jobTitles,
  preselectedJob = "",
}: ApplicationFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM(preselectedJob));
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

    const res = await fetch("/api/careers/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again or email us at hr@xponent.com.bd.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Application Submitted!</h2>
        <p className="text-muted-foreground max-w-md">
          Thanks for applying for the <strong>{form.jobTitle}</strong> position.
          We&apos;ve sent a confirmation to <strong>{form.email}</strong> and will be
          in touch within 5–7 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Job Title */}
      <div className="space-y-1.5">
        <label htmlFor="jobTitle" className="block text-sm font-medium text-foreground">
          Position <span className="text-destructive">*</span>
        </label>
        <select
          id="jobTitle"
          name="jobTitle"
          required
          value={form.jobTitle}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Select a position…</option>
          {jobTitles.map((title) => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
            First name <span className="text-destructive">*</span>
          </label>
          <input
            id="firstName" name="firstName" type="text" required
            value={form.firstName} onChange={handleChange} placeholder="John"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
            Last name <span className="text-destructive">*</span>
          </label>
          <input
            id="lastName" name="lastName" type="text" required
            value={form.lastName} onChange={handleChange} placeholder="Smith"
            className={inputClass}
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
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange} placeholder="john@example.com"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel" required
            value={form.phone} onChange={handleChange} placeholder="+880 17XX XXX XXX"
            className={inputClass}
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1.5">
        <label htmlFor="address" className="block text-sm font-medium text-foreground">
          Address <span className="text-destructive">*</span>
        </label>
        <input
          id="address" name="address" type="text" required
          value={form.address} onChange={handleChange}
          placeholder="City, Country"
          className={inputClass}
        />
      </div>

      {/* LinkedIn & Facebook */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="linkedin" className="block text-sm font-medium text-foreground">
            LinkedIn profile <span className="text-destructive">*</span>
          </label>
          <input
            id="linkedin" name="linkedin" type="url" required
            value={form.linkedin} onChange={handleChange}
            placeholder="https://linkedin.com/in/yourprofile"
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="facebook" className="block text-sm font-medium text-foreground">
            Facebook profile <span className="text-destructive">*</span>
          </label>
          <input
            id="facebook" name="facebook" type="url" required
            value={form.facebook} onChange={handleChange}
            placeholder="https://facebook.com/yourprofile"
            className={inputClass}
          />
        </div>
      </div>

      {/* Cover Letter */}
      <div className="space-y-1.5">
        <label htmlFor="coverLetter" className="block text-sm font-medium text-foreground">
          Cover letter <span className="text-destructive">*</span>
        </label>
        <p className="text-xs text-muted-foreground">
          Tell us why you&apos;re a great fit, your relevant experience, and what excites you about this role.
        </p>
        <textarea
          id="coverLetter" name="coverLetter" rows={7} required
          value={form.coverLetter} onChange={handleChange}
          placeholder="Write your cover letter here…"
          className={`${inputClass} resize-none`}
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
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-60 transition-all"
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
            </svg>
            Submitting…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
}
