// components/careers/detail/career-detail-why-join.tsx

import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface CareerDetailWhyJoinProps {
  reasons: string[];
  jobId: string;
}

export default function CareerDetailWhyJoin({
  reasons,
  jobId,
}: CareerDetailWhyJoinProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-primary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-white">
          Why Join Xponent
        </h2>
        <div className="space-y-4 mb-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <p className="text-lg text-white/90 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/20">
          <Link
            href={`/careers/apply?job=${jobId}`}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
