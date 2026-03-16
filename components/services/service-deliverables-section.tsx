import { Package } from "lucide-react";

interface IServiceDeliverablesSectionProps {
  deliverables: string[];
}

export default function ServiceDeliverablesSection({
  deliverables,
}: IServiceDeliverablesSectionProps) {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            What You&apos;ll Receive
          </h2>
        </div>

        <div className="space-y-4">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg"
            >
              <Package className="h-6 w-6 text-accent shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">{deliverable}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
