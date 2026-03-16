import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DotSVGBGPattern from "@/components/common/dot-svg-bg-pattern";
import { HOME_SERVICES } from "@/lib/constants/home";

export default function HomeWhatWeDoSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-background overflow-hidden border-t border-gray-200">
      <div className="relative max-w-7xl mx-auto">
        {/* SVG Background Pattern */}
        <DotSVGBGPattern classes="hidden lg:block absolute right-full transform translate-x-1/2 -translate-y-0" />

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            {/* Section label */}
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                What We Do
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Digital Systems That Power Modern Businesses
            </h2>

            {/* Intro text */}
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We help organizations replace manual processes with structured
              digital systems that improve efficiency, visibility, and long-term
              growth.
            </p>

            {/* Services list */}
            <div className="space-y-6 mb-10">
              {HOME_SERVICES.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/services">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold">
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Right - Image with decorative background */}
          <div className="relative mt-10 lg:mt-0">
            {/* Decorative background frame */}
            <div className="absolute inset-0 bg-accent/10 rounded-2xl -rotate-3"></div>
            <div className="absolute inset-0 border-4 border-accent rounded-2xl rotate-2 opacity-40"></div>

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/235bb60dc527892ac54a35ccacb574b498f0dc01.png"
                alt="Professional team member"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
