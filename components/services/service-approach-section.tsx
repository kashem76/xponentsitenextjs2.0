import { IServiceApproachStep } from "@/lib/types/services.types";

interface IServiceApproachSectionProps {
  approach: IServiceApproachStep[];
}

export default function ServiceApproachSection({
  approach,
}: IServiceApproachSectionProps) {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Our Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A proven, collaborative process that delivers results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {approach.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">
                    {step.step}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
