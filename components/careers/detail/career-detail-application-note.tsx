// components/careers/detail/career-detail-application-note.tsx

interface CareerDetailApplicationNoteProps {
  note: string;
  steps: string[];
}

export default function CareerDetailApplicationNote({
  note,
  steps,
}: CareerDetailApplicationNoteProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">How to Apply</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {note}
        </p>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border"
            >
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                {index + 1}
              </span>
              <p className="text-base leading-relaxed pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
