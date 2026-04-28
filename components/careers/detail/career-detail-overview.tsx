// components/careers/detail/career-detail-overview.tsx

interface CareerDetailOverviewProps {
  overview: string;
}

export default function CareerDetailOverview({
  overview,
}: CareerDetailOverviewProps) {
  // Split into blocks by double newline, then detect bullet lists within blocks
  const blocks = overview.split("\n\n");

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Role Overview</h2>
        <div className="space-y-4">
          {blocks.map((block, index) => {
            const lines = block.split("\n");
            const bulletLines = lines.filter((l) => l.startsWith("•"));

            if (bulletLines.length > 0) {
              // Block contains bullets — split into leading text + list
              const leadingText = lines
                .filter((l) => !l.startsWith("•"))
                .join(" ")
                .trim();
              return (
                <div key={index}>
                  {leadingText && (
                    <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                      {leadingText}
                    </p>
                  )}
                  <ul className="space-y-1 pl-1">
                    {bulletLines.map((item, i) => (
                      <li
                        key={i}
                        className="text-lg text-muted-foreground leading-relaxed flex items-start gap-2"
                      >
                        <span className="shrink-0">•</span>
                        <span>{item.replace(/^•\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {block}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
