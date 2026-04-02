// components/careers/careers-hero-section.tsx

import Link from "next/link";

export default function CareersHeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
          Build the Future with Xponent
        </h1>
        <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join a team that&apos;s transforming businesses through custom
          software, AI automation, and digital platforms. Work on challenging
          problems, learn cutting-edge technology, and make a real impact.
        </p>
        <Link
          href="/careers/#open-positions"
          className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
        >
          View Open Positions
        </Link>
      </div>
    </section>
  );
}
