interface IServiceCtaSectionProps {
  serviceName: string;
}

export default function ServiceCtaSection({
  serviceName,
}: IServiceCtaSectionProps) {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Get Started with {serviceName}?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss how we can help you achieve your goals with our{" "}
          {serviceName.toLowerCase()} services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
            Start a Conversation
          </button>
          <button className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border-2 border-white/30">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
