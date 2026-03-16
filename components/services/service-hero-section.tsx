import { ArrowRight } from "lucide-react";
import { IService } from "@/lib/types/services.types";

interface IServiceHeroSectionProps {
  service: IService;
}

export default function ServiceHeroSection({
  service,
}: IServiceHeroSectionProps) {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 rounded-full">
          <span className="text-sm font-semibold text-white uppercase tracking-wide">
            {service.tagline}
          </span>
        </div>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white">
          {service.hero.headline}
        </h1>

        <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
          {service.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-semibold">
            {service.hero.primaryCTA}
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border-2 border-white/30">
            {service.hero.secondaryCTA}
          </button>
        </div>
      </div>
    </section>
  );
}
