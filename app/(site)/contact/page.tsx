// app/(site)/contact/page.tsx
import ContactHeroSection from "@/components/contact/contact-hero-section";
import ContactContentSection from "@/components/contact/contact-content-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | XPONENT",
  description:
    "XPONENT offers a wide range of web technology services to clients all over the world.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHeroSection />
      <ContactContentSection />
    </div>
  );
}
