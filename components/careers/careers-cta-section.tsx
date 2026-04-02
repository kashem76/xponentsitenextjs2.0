// components/careers/careers-cta-section.tsx

import Link from "next/link";

export default function CareersCtaSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
          Don&apos;t See the Right Role?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          We&apos;re always looking for talented people. Send us your resume and
          tell us what you&apos;re passionate about.
        </p>
        <Link href="/contact">
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
            Send General Application
          </button>
        </Link>
      </div>
    </section>
  );
}
