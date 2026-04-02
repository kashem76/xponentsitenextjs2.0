import { IProductKeyFeature } from "@/lib/types/products.types";
import { getIconComponent } from "@/lib/utils/products/get-icon-component";

interface IProductFeaturesSectionProps {
  features: IProductKeyFeature[];
}

export default function ProductFeaturesSection({
  features,
}: IProductFeaturesSectionProps) {
  if (!features || features.length === 0) return null;

  return (
    <section
      className="py-20 lg:py-24 px-6 lg:px-8 bg-background"
      id="product-features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful capabilities designed to streamline your operations and
            improve efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-gray-200 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  {getIconComponent({
                    iconName: feature.icon,
                    className: "h-6 w-6",
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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
