import { ABOUT_STATS } from "@/lib/constants/about.constants";

export default function AboutStatsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            By the Numbers
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Two decades of building trust, delivering results, and growing
            alongside our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {ABOUT_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
