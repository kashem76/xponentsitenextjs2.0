import { CheckCircle } from "lucide-react";

interface IServiceIndustriesDeliverablesSectionProps {
  industries?: string[];
  deliverables?: string[];
}

export default function ServiceIndustriesDeliverablesSection({
  industries,
  deliverables,
}: IServiceIndustriesDeliverablesSectionProps) {
  if (
    (!industries || industries.length === 0) &&
    (!deliverables || deliverables.length === 0)
  ) {
    return null;
  }

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Industries */}
          {industries && industries.length > 0 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-gray-200"
                  >
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables */}
          {deliverables && deliverables.length > 0 && (
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                What You&apos;ll Receive
              </h2>
              <div className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <p className="leading-relaxed">{deliverable}</p>
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
