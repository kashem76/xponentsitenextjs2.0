// app/(site)/privacy-policy/page.tsx
import PrivacyContentSection from "@/components/privacy/privacy-content-section";
import PrivacyHeroSection from "@/components/privacy/privacy-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | XPONENT",
  description:
    "XPONENT offers a wide range of web technology services to clients all over the world.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <PrivacyHeroSection />
      <PrivacyContentSection />
    </div>
  );
}
