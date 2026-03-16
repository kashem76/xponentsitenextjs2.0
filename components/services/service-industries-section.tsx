interface IServiceIndustriesSectionProps {
  industries: string[];
}

export default function ServiceIndustriesSection({
  industries,
}: IServiceIndustriesSectionProps) {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border-2 border-border text-center hover:border-accent transition-colors"
            >
              <p className="font-semibold">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
