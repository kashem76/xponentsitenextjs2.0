// components/contact/contact-hero-section.tsx
export default function ContactHeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white">
            Got a Question?
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mt-6">
            {`We'd love to talk about how we can help you.`}
          </p>
        </div>
      </div>
    </section>
  );
}
