import { IServiceCapability } from "@/lib/types/services.types";
import { getIconComponent } from "@/lib/utils/products/get-icon-component";

interface IServiceCapabilitiesSectionProps {
  capabilities: IServiceCapability[];
}

export default function ServiceCapabilitiesSection({
  capabilities,
}: IServiceCapabilitiesSectionProps) {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            What We Deliver
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                {getIconComponent({
                  iconName: capability.icon,
                  className: "h-6 w-6",
                })}
              </div>
              <h3 className="text-lg font-bold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
