import { IProductUseCase } from "@/lib/types/products.types";

interface IProductUseCasesSectionProps {
  useCases: IProductUseCase[];
  productName: string;
}

export default function ProductUseCasesSection({
  useCases,
  productName,
}: IProductUseCasesSectionProps) {
  if (!useCases || useCases.length === 0) return null;

  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Built for Your Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how {productName} adapts to different business needs and
            industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border-4 border-accent/20 hover:border-accent transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{useCase.industry}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
