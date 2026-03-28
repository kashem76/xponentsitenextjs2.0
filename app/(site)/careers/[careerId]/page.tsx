// app/careers/[careerId]/page.tsx

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

interface PageProps {
  params: Promise<{
    careerId: string;
  }>;
}

export default async function CareerDetailPage({ params }: PageProps) {
  console.log(params);
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

      {/* Requirements & Nice to Have */}
      <CareerDetailRequirements
        requirements={career.requirements}
        niceToHave={career.niceToHave}
      />

      {/* Success Metrics */}
      {career.successMetrics && career.successMetrics.length > 0 && (
        <CareerDetailMetrics metrics={career.successMetrics} />
      )}

      {/* Why Join */}
      {career.whyJoin && career.whyJoin.length > 0 && (
        <CareerDetailWhyJoin reasons={career.whyJoin} />
      )}
    </div>
  );
}

// Generate static params for all careers (optional, for static generation)
export async function generateStaticParams() {
  return careersData.careers.map((career: ICareer) => ({
    careerId: career.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const career = careersData.careers.find(
    async (c: ICareer) => c.id === (await params).careerId,
  ) as ICareer | undefined;

  if (!career) {
    return {
      title: "Career Not Found",
    };
  }

  return {
    title: `${career.title} - Xponent Careers`,
    description: career.overview.substring(0, 160),
  };
}
