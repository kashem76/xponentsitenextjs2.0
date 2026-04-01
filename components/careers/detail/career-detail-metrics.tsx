// components/careers/detail/career-detail-metrics.tsx

import { Target } from "lucide-react";

interface CareerDetailMetricsProps {
  metrics: string[];
}

export default function CareerDetailMetrics({
  metrics,
}: CareerDetailMetricsProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">Success Metrics</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-muted/20 rounded-xl border border-border"
            >
              <Target className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <p className="font-medium leading-relaxed">{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
