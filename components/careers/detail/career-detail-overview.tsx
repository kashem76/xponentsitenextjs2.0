// components/careers/detail/career-detail-overview.tsx

interface CareerDetailOverviewProps {
  overview: string;
}

export default function CareerDetailOverview({
  overview,
}: CareerDetailOverviewProps) {
  return (
    <section className="py-16 lg:py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Role Overview</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {overview}
        </p>
      </div>
    </section>
  );
}
