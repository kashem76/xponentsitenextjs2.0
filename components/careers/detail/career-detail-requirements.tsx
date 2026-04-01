// components/careers/detail/career-detail-requirements.tsx

import { CheckCircle } from "lucide-react";

interface CareerDetailRequirementsProps {
  requirements?: string[];
  niceToHave?: string[];
}

export default function CareerDetailRequirements({
  requirements,
  niceToHave,
}: CareerDetailRequirementsProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          {requirements && requirements.length > 0 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                Requirements
              </h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nice to Have */}
          {niceToHave && niceToHave.length > 0 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                Nice to Have
              </h2>
              <div className="space-y-4">
                {niceToHave.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
