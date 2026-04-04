// components/contact/contact-hero-section.tsx
export default function ContactHeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-primary">
      <div className="max-w-6xl mx-auto text-center py-10">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 mb-6">
          Contact Us
        </span>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white">
          Let&apos;s work{" "}
          <span className="text-accent">together</span>
        </h1>
        <p className="text-lg lg:text-xl text-white/75 mt-5 max-w-xl mx-auto">
          Tell us about your project and we&apos;ll help bring it to life.
        </p>
      </div>
    </section>
  );
}
