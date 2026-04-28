// app/(site)/careers/[careerId]/page.tsx
import { notFound } from "next/navigation";
import careersData from "@/lib/data/careers.json";
import { ICareer } from "@/lib/types/careers.types";
import CareerDetailHero from "@/components/careers/detail/career-detail-hero";
import CareerDetailClosed from "@/components/careers/detail/career-detail-closed";
import CareerDetailOverview from "@/components/careers/detail/career-detail-overview";
import CareerDetailOwnership from "@/components/careers/detail/career-detail-ownership";
import CareerDetailResponsibilities from "@/components/careers/detail/career-detail-responsibilities";
import CareerDetailRequirements from "@/components/careers/detail/career-detail-requirements";
import CareerDetailMetrics from "@/components/careers/detail/career-detail-metrics";
import CareerDetailWhyJoin from "@/components/careers/detail/career-detail-why-join";
import CareerDetailCallout from "@/components/careers/detail/career-detail-callout";
import CareerDetailApplicationNote from "@/components/careers/detail/career-detail-application-note";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    careerId: string;
  }>;
}

// Generate static params for all careers
export async function generateStaticParams() {
  return careersData.careers.map((career: ICareer) => ({
    careerId: career.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { careerId } = await params;
  const career = careersData.careers.find((c: ICareer) => c.id === careerId) as
    | ICareer
    | undefined;

  if (!career) {
    return {
      title: "Career Not Found",
    };
  }

  const description =
    career.overview.substring(0, 155) ||
    `Join Xponent InfoSystem as a ${career.title}. ${career.location} - ${career.type}`;

  return {
    title: `${career.title} - ${career.location} | Xponent Careers`,
    description,
    keywords: [
      career.title,
      `${career.title} Bangladesh`,
      career.department,
      career.location,
      career.type,
      "software developer jobs",
      "IT jobs Bangladesh",
      "Xponent careers",
      "tech jobs",
    ],
    openGraph: {
      title: `${career.title} - ${career.location} | Xponent Careers`,
      description,
      url: `https://www.xponent.com.bd/careers/${careerId}`,
      type: "website",
      locale: "en_US",
      siteName: "Xponent InfoSystem",
      images: [
        {
          url: "/images/careers-og.jpg",
          width: 1200,
          height: 630,
          alt: `${career.title} at Xponent InfoSystem`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${career.title} - ${career.location} | Xponent`,
      description,
      images: ["/images/careers-og.jpg"],
    },
    alternates: {
      canonical: `https://www.xponent.com.bd/careers/${careerId}`,
    },
    robots: {
      index: career.isOpen,
      follow: true,
    },
  };
}

export default async function CareerDetailPage({ params }: PageProps) {
  const { careerId } = await params;
  const career = careersData.careers.find((c: ICareer) => c.id === careerId) as
    | ICareer
    | undefined;

  if (!career) {
    notFound();
  }

  // If position is closed, show a message
  if (!career.isOpen) {
    return <CareerDetailClosed />;
  }

  // Extract ownership items for proper TypeScript narrowing
  const ownershipItems = career.whatYouWillOwn || career.whatYouWillWorkOn;
  const ownershipTitle = career.whatYouWillOwn
    ? "What You Will Own"
    : "What You Will Work On";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CareerDetailHero career={career} />

      {/* Overview Section */}
      <CareerDetailOverview overview={career.overview} />

      {/* Callout */}
      {career.callout && <CareerDetailCallout text={career.callout} />}

      {/* What You Will Own / Work On */}
      {ownershipItems && ownershipItems.length > 0 && (
        <CareerDetailOwnership items={ownershipItems} title={ownershipTitle} />
      )}

      {/* Responsibilities */}
      {career.responsibilities && career.responsibilities.length > 0 && (
        <CareerDetailResponsibilities
          responsibilities={career.responsibilities}
        />
      )}

      {/* Requirements, Nice to Have & Who You Are */}
      <CareerDetailRequirements
        requirements={career.requirements}
        niceToHave={career.niceToHave}
        whoYouAre={career.whoYouAre}
        whatWeDoNotNeed={career.whatWeDoNotNeed}
        technicalEnvironment={career.technicalEnvironment}
      />

      {/* Success Metrics */}
      {career.successMetrics && career.successMetrics.length > 0 && (
        <CareerDetailMetrics metrics={career.successMetrics} />
      )}

      {/* Application Note */}
      {career.applicationNote && career.applicationSteps && career.applicationSteps.length > 0 && (
        <CareerDetailApplicationNote
          note={career.applicationNote}
          steps={career.applicationSteps}
        />
      )}

      {/* Why Join */}
      {career.whyJoin && career.whyJoin.length > 0 && (
        <CareerDetailWhyJoin reasons={career.whyJoin} jobId={career.id} locationNote={career.locationNote} />
      )}
    </div>
  );
}
