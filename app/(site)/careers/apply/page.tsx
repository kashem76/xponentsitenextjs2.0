// app/(site)/careers/apply/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, MapPin, Users } from "lucide-react";
import careersData from "@/lib/data/careers.json";
import { ICareer } from "@/lib/types/careers.types";
import ApplicationForm from "@/components/careers/application-form";

export const metadata: Metadata = {
  title: "Apply | Careers at Xponent InfoSystem",
  description:
    "Apply for an open position at Xponent InfoSystem. Join our team and help build the future of software.",
};

interface PageProps {
  searchParams: Promise<{ job?: string }>;
}

export default async function CareersApplyPage({ searchParams }: PageProps) {
  const { job } = await searchParams;

  const openCareers = (careersData.careers as ICareer[]).filter((c) => c.isOpen);
  const openJobs = openCareers.map((c) => c.title);

  // Resolve slug id (e.g. "sales-executive") → title for preselection
  const matched = openCareers.find((c) => c.id === job);
  const preselectedJob = matched?.title ?? "";

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>
          <span className="inline-block bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5">
            Join Our Team
          </span>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
            Apply for a Position
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            Fill in the form below and we&apos;ll get back to you within 5–7 business days.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="px-6 lg:px-8 py-14">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Form */}
          <div className="flex-1 min-w-0">
            <div className="rounded-2xl border border-border bg-card shadow-sm p-8 sm:p-10">
              <h2 className="text-xl font-bold text-foreground mb-1">Your Application</h2>
              <p className="text-sm text-muted-foreground mb-8">
                All fields are required. We review every application personally.
              </p>
              <ApplicationForm jobTitles={openJobs} preselectedJob={preselectedJob} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-64 xl:w-72 shrink-0 lg:sticky lg:top-24 space-y-5">

            {/* Open positions summary */}
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" /> Open Positions
              </p>
              <ul className="space-y-2">
                {(careersData.careers as ICareer[])
                  .filter((c) => c.isOpen)
                  .map((c) => (
                    <li key={c.id}>
                      <Link
                        href={`/careers/${c.id}`}
                        className="text-sm text-foreground hover:text-primary transition-colors block"
                      >
                        {c.title}
                        <span className="block text-xs text-muted-foreground">{c.department} · {c.location}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* What to expect */}
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" /> What to Expect
              </p>
              <ol className="space-y-3">
                {[
                  "We review your application",
                  "Initial call with our team",
                  "Technical / skills assessment",
                  "Final interview & offer",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Location card */}
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Office
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Noor Building, 2nd Floor<br />
                700/B, DT Road, Dewanhat<br />
                Chittagong-4100, Bangladesh
              </p>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
