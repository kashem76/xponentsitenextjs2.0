import CareersCtaSection from "@/components/careers/careers-cta-section";
import CareersCultureSection from "@/components/careers/careers-culture-section";
import CareersHeroSection from "@/components/careers/careers-hero-section";
import CareersPerksSection from "@/components/careers/careers-perks-section";
import CareersPositionsSection from "@/components/careers/careers-positions-section";
import CareersValuesSection from "@/components/careers/careers-values-section";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CareersHeroSection />

      {/* Culture Image Section */}
      <CareersCultureSection />

      {/* Values Section */}
      <CareersValuesSection />

      {/* Perks & Benefits */}
      <CareersPerksSection />

      {/* Open Positions */}
      <CareersPositionsSection />

      {/* CTA Section */}
      <CareersCtaSection />
    </div>
  );
}
