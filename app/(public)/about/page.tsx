import AboutHeroSection from "@/components/about/about-hero-section";
import AboutValuesSection from "@/components/about/about-values-section";
import AboutStatsSection from "@/components/about/about-stats-section";
import AboutHowWeWorkSection from "@/components/about/about-how-we-work-section";
import AboutTeamSection from "@/components/about/about-team-section";
import AboutCtaSection from "@/components/about/about-cta-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Core Values */}
      <AboutValuesSection />

      {/* By the Numbers */}
      <AboutStatsSection />

      {/* How We Work */}
      <AboutHowWeWorkSection />

      {/* Team/Culture Section */}
      <AboutTeamSection />

      {/* CTA Section */}
      <AboutCtaSection />
    </div>
  );
}
