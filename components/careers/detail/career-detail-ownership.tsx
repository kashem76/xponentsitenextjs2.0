// components/careers/detail/career-detail-ownership.tsx

import { Target } from "lucide-react";

interface CareerDetailOwnershipProps {
  items: string[];
  title: string;
}

export default function CareerDetailOwnership({
  items,
  title,
}: CareerDetailOwnershipProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
            >
              <Target className="h-5 w-5 text-accent shrink-0" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
