import { Quote } from "lucide-react";
import DotSVGBGPattern from "@/components/common/dot-svg-bg-pattern";
import { HOME_TESTIMONIALS } from "@/lib/constants/home.constants";

export default function HomeTestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-muted/30 overflow-hidden border-t border-gray-200">
      <div className="relative max-w-7xl mx-auto">
        {/* SVG Background Pattern */}
        <DotSVGBGPattern classes="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-0" />

        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Trusted by Business Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we&apos;ve helped organizations transform their operations
              with custom digital solutions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOME_TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border/50"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Quote className="h-6 w-6 text-accent" />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-muted-foreground mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
