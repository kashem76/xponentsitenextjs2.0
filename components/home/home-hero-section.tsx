import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { HOME_HERO_IMAGE } from "@/lib/constants/home";

export default function HomeHeroSection() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 bg-primary relative overflow-hidden"
    >
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-tight text-primary-foreground">
              Custom Software & AI Automation for Businesses
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              We design and build custom software and AI-powered systems that
              replace manual processes, improve operational efficiency, reduce
              costs, and help businesses make better decisions through reliable
              data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-semibold">
                Book a Strategy Conversation
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-colors font-semibold">
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            {/* Decorative border frame */}
            <div className="absolute -inset-4 border-4 border-accent rounded-2xl opacity-60"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={HOME_HERO_IMAGE}
                alt="Professional working on laptop"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/50 rounded-2xl opacity-80 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-foreground/20 rounded-2xl opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
