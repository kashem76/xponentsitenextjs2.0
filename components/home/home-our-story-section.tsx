import DotSVGBGPattern from "@/components/common/dot-svg-bg-pattern";

export default function HomeStorySection() {
  return (
    <div className="py-24 lg:py-32 px-6 lg:px-8 bg-white overflow-hidden border-t border-gray-200">
      <div className="relative max-w-7xl mx-auto">
        <DotSVGBGPattern classes="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-0" />

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - positioned on the left */}
          <div className="relative mt-10 lg:mt-0 lg:order-1">
            {/* Decorative background frame */}
            <div className="absolute inset-0 bg-accent/10 rounded-2xl -rotate-3"></div>
            <div className="absolute inset-0 border-4 border-accent rounded-2xl rotate-2 opacity-40"></div>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/xponent-our-story.png"
                alt="Xponent office workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content - positioned on the right */}
          <div className="lg:order-2">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Two decades of building digital systems for growing businesses.
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Xponent was founded in 2002 in Chattogram, Bangladesh, initially
                building custom software systems for local businesses, including
                several large national and multinational organizations.
              </p>
              <p>
                By 2005, the company began working with international clients,
                delivering web technology and digital solutions to businesses
                across the United States, the United Kingdom, Australia, and
                Europe.
              </p>
              <p>
                Over the years, our team has developed deep experience in
                building and supporting digital businesses — from content
                platforms and SaaS applications to ecommerce systems and
                operational software.
              </p>
              <p>
                As technology continues to evolve, Xponent is increasingly
                focused on helping organizations adopt automation and AI-powered
                systems that improve productivity, streamline operations, and
                support the next generation of digital businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
