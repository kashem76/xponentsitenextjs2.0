// components/careers/careers-perks-section.tsx

import { CAREERS_PERKS } from "@/lib/constants/careers.constants";

export default function CareersPerksSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Perks & Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We invest in our team&apos;s success, growth, and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CAREERS_PERKS.map((perk, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-muted/20 rounded-xl"
            >
              <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
              <p className="text-lg leading-relaxed">{perk}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
