// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationStructuredData } from "@/components/common/organization-structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xponent.com.bd"),
  title: {
    default:
      "Xponent InfoSystem | Software Development & IT Solutions in Bangladesh",
    template: "%s | Xponent InfoSystem",
  },
  description:
    "Xponent InfoSystem is a leading software development company in Bangladesh specializing in custom software solutions, web development, mobile apps, cloud services, and digital transformation for businesses worldwide.",
  keywords: [
    "Xponent InfoSystem",
    "software development Bangladesh",
    "IT solutions Bangladesh",
    "custom software development",
    "web development company",
    "mobile app development",
    "cloud solutions",
    "digital transformation",
    "enterprise software",
    "software consulting",
    "IT outsourcing Bangladesh",
    "technology partner",
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
      "Leading software development company in Bangladesh delivering custom software solutions, web & mobile apps, and digital transformation services to global clients.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xponent InfoSystem - Software Development Company in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xponent InfoSystem | Software Development & IT Solutions",
    description:
      "Leading software development company in Bangladesh delivering custom software solutions, web & mobile apps, and digital transformation services.",
    images: ["/images/og-image.jpg"],
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
  verification: {
    // google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
