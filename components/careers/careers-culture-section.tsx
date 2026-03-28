// components/careers/careers-culture-section.tsx

import { ImageWithFallback } from "@/components/common/image-with-fallback";

export default function CareersCultureSection() {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM0NjY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Xponent team collaboration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
