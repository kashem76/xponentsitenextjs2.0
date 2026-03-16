import { CheckCircle } from "lucide-react";

interface IProductBenefitsSectionProps {
  benefits: string[];
  productName: string;
}

export default function ProductBenefitsSection({
  benefits,
  productName,
}: IProductBenefitsSectionProps) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Why Choose {productName}?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
