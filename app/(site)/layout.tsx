// app/(site)/layout.tsx
import PublicFooter from "@/components/common/public-footer";
import PublicHeader from "@/components/common/public-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xponent.com.bd"),
  title: {
    default:
      "Xponent InfoSystem | Software Development & IT Solutions in Bangladesh",
    template: "%s | Xponent InfoSystem",
  },
  description:
    "Xponent InfoSystem delivers innovative software development and IT solutions. Partner with us for custom software, web development, mobile apps, and digital transformation services.",
  keywords: [
    "Xponent InfoSystem",
    "software development Bangladesh",
    "IT consulting",
    "custom software solutions",
    "web application development",
    "mobile app development",
    "cloud computing services",
    "enterprise solutions",
    "digital transformation",
    "agile development",
  ],
  authors: [{ name: "Xponent InfoSystem" }],
  creator: "Xponent InfoSystem",
  publisher: "Xponent InfoSystem",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.xponent.com.bd",
    siteName: "Xponent InfoSystem",
    title:
      "Xponent InfoSystem | Software Development & IT Solutions in Bangladesh",
    description:
      "Transform your business with Xponent InfoSystem. Expert software development, web & mobile solutions, and IT consulting services in Bangladesh.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Xponent InfoSystem - Leading Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xponent InfoSystem | Software Development & IT Solutions",
    description:
      "Transform your business with Xponent InfoSystem. Expert software development, web & mobile solutions, and IT consulting services.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </>
  );
}
