import DotSVGBGPattern from "@/components/common/dot-svg-bg-pattern";

export default function HomeMissionSection() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden border-t border-gray-200">
      <div className="relative max-w-7xl mx-auto">
        <DotSVGBGPattern classes="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-0" />

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Our Mission
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              We believe technology should make businesses work better.
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our mission is to help organizations build reliable digital
                systems — combining software platforms, automation, and AI to
                improve productivity, reduce operational friction, and support
                long-term growth.
              </p>
              <p>
                At the same time, we aim to create opportunities for talented
                engineers and builders to develop systems used by organizations
                around the world.
              </p>
              <p>
                We focus on building practical, well-designed systems that solve
                real operational problems, helping organizations adopt modern
                technology with clarity, stability, and long-term value.
              </p>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
            {/* Decorative background frame */}
            <div className="absolute inset-0 bg-accent/10 rounded-2xl -rotate-3"></div>
            <div className="absolute inset-0 border-4 border-accent rounded-2xl rotate-2 opacity-40"></div>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/196fa81008baed4e048dfa7f13033ac4ac68132d.png"
                alt="Professional team member"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
