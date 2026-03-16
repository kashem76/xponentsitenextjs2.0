export default function HomeCtaSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-24 px-6 lg:px-8 bg-background border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
          Let&apos;s Build Better Systems for Your Business
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Start a conversation with our team to explore how we can help
          streamline your operations and scale your business with custom
          technology solutions.
        </p>
        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
          Book a Strategy Consultation
        </button>
      </div>
    </section>
  );
}
