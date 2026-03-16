import { IServiceCapability } from "@/lib/types/services.types";
import { getIconComponent } from "@/lib/utils/products/get-icon-component";

interface IServiceCapabilitiesSectionProps {
  capabilities: IServiceCapability[];
}

export default function ServiceCapabilitiesSection({
  capabilities,
}: IServiceCapabilitiesSectionProps) {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            What We Deliver
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive capabilities to address your business needs and
            technical requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-gray-200 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  {getIconComponent({
                    iconName: capability.icon,
                    className: "h-6 w-6",
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
