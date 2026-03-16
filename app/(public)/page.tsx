import HomeHeroSection from "@/components/home/home-hero-section";
import HomeTrustedBySection from "@/components/home/home-trusted-by-section";
import HomeWhatWeDoSection from "@/components/home/home-what-we-do-section";
import HomeTestimonialsSection from "@/components/home/home-testimonials-section";
import HomeCtaSection from "@/components/home/home-cta-section";
import HomeHiringSection from "@/components/home/home-hiring-section";
import HomeMissionSection from "@/components/home/home-our-mission-section";
import HomeStorySection from "@/components/home/home-our-story-section";
import HomeValuesSection from "@/components/home/home-our-values-section";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Trusted By Section */}
      <HomeTrustedBySection />

      {/* Our Mission Section */}
      <HomeMissionSection />

      {/* Our Story Section */}
      <HomeStorySection />

      {/* Our Values Section */}
      <HomeValuesSection />

      {/* What We Do Section */}
      <HomeWhatWeDoSection />

      {/* Testimonials Section */}
      <HomeTestimonialsSection />

      {/* Final CTA Section */}
      <HomeCtaSection />

      {/* We Are Hiring Section */}
      <HomeHiringSection />
    </div>
  );
}
