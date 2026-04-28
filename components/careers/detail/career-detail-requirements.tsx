// components/careers/detail/career-detail-requirements.tsx

import { CheckCircle, Monitor, XCircle } from "lucide-react";

interface CareerDetailRequirementsProps {
  requirements?: string[];
  niceToHave?: string[];
  whoYouAre?: string[];
  whatWeDoNotNeed?: string[];
  technicalEnvironment?: string[] | { workWith: string[]; buildWith: string[] };
}

export default function CareerDetailRequirements({
  requirements,
  niceToHave,
  whoYouAre,
  whatWeDoNotNeed,
  technicalEnvironment,
}: CareerDetailRequirementsProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto space-y-12">
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

        {/* Technical Environment */}
        {technicalEnvironment && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Technical Environment
            </h2>
            {Array.isArray(technicalEnvironment) ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalEnvironment.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Monitor className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">You&apos;ll work with code in:</h3>
                  <div className="space-y-3">
                    {technicalEnvironment.workWith.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Monitor className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">You&apos;ll build features using:</h3>
                  <div className="space-y-3">
                    {technicalEnvironment.buildWith.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Monitor className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Who You Are */}
        {whoYouAre && whoYouAre.length > 0 && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Who You Are
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {whoYouAre.map((trait, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{trait}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What We Do NOT Need */}
        {whatWeDoNotNeed && whatWeDoNotNeed.length > 0 && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              What We Do NOT Need
            </h2>
            <div className="space-y-4">
              {whatWeDoNotNeed.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <XCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
