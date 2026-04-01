// components/careers/careers-values-section.tsx

import { CAREERS_VALUES } from "@/lib/constants/careers.constants";

export default function CareersValuesSection() {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The principles that guide how we work, collaborate, and build
            technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAREERS_VALUES.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent mx-auto mb-6">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
