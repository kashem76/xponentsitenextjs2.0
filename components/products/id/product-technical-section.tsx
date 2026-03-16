import { CheckCircle } from "lucide-react";

interface IProductTechnicalSectionProps {
  highlights: string[];
}

export default function ProductTechnicalSection({
  highlights,
}: IProductTechnicalSectionProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Technical Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with modern technology for reliability, security, and
            scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-4 p-4">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
