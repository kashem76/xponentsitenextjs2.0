import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { ABOUT_TEAM_HIGHLIGHTS } from "@/lib/constants/about.constants";

export default function AboutTeamSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-linear-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Xponent is built by a diverse team of engineers, designers,
              strategists, and problem-solvers who are passionate about
              technology and committed to client success.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in continuous learning, collaboration, and creating an
              environment where great work happens naturally. Our team
              doesn&apos;t just build software—we build lasting relationships
              and solve complex problems together.
            </p>
            <div className="space-y-4">
              {ABOUT_TEAM_HIGHLIGHTS.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src={`https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop`}
              alt="Xponent Team"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
