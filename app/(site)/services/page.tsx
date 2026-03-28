// app/(site)/services/page.tsx
import ServicesOverviewHeaderSection from "@/components/services/services-overview-header-section";
import ServicesOverviewGridSection from "@/components/services/services-overview-grid-section";
import ServicesOverviewCtaSection from "@/components/services/services-overview-cta-section";
import { getAllServices } from "@/lib/utils/services/get-service-by-id";

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ServicesOverviewHeaderSection />

        {/* Services Grid */}
        <ServicesOverviewGridSection services={services} />

        {/* Bottom CTA */}
        <ServicesOverviewCtaSection />
      </div>
    </div>
  );
}
