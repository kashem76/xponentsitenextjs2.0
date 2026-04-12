// components/careers/detail/career-detail-callout.tsx

interface CareerDetailCalloutProps {
  text: string;
}

export default function CareerDetailCallout({ text }: CareerDetailCalloutProps) {
  return (
    <section className="px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-6 py-5">
          <p className="text-base lg:text-lg font-medium leading-relaxed text-foreground">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
