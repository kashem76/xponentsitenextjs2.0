import { IServiceApproachStep } from "@/lib/types/services.types";

interface IServiceApproachSectionProps {
  approach: IServiceApproachStep[];
}

export default function ServiceApproachSection({
  approach,
}: IServiceApproachSectionProps) {
  if (!approach || approach.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven process that delivers results and keeps you informed every
            step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approach.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-xl font-bold text-xl mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (except for last item) */}
              {index < approach.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-accent/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
