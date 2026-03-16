import { ABOUT_APPROACH } from "@/lib/constants/about.constants";

export default function AboutHowWeWorkSection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach to building software is rooted in partnership,
            transparency, and delivering value at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ABOUT_APPROACH.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="shrink-0">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
