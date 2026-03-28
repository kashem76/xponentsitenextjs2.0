// components/careers/detail/career-detail-responsibilities.tsx

import { CheckCircle } from "lucide-react";

interface CareerDetailResponsibilitiesProps {
  responsibilities: string[];
}

export default function CareerDetailResponsibilities({
  responsibilities,
}: CareerDetailResponsibilitiesProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Key Responsibilities
        </h2>
        <div className="space-y-4">
          {responsibilities.map((responsibility, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <p className="text-lg leading-relaxed">{responsibility}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
