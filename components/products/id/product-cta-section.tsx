interface IProductCtaSectionProps {
  productName: string;
}

export default function ProductCtaSection({
  productName,
}: IProductCtaSectionProps) {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Get Started with {productName}?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Schedule a personalized demo to see how {productName} can transform
          your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
            Schedule a Demo
          </button>
          <button className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border-2 border-white/30">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
