// components/careers/detail/career-detail-hero.tsx

import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Shield,
  Calendar,
  HandCoins,
} from "lucide-react";
import { ICareer } from "@/lib/types/careers.types";
import Link from "next/link";
import { CareerDetailsShareJobLink } from "@/components/careers/detail/career-details-share-job-link";

interface CareerDetailHeroProps {
  career: ICareer;
}

export default function CareerDetailHero({ career }: CareerDetailHeroProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-8 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold uppercase tracking-wide">
            {career.department}
          </span>
          {career.urgent && (
            <span className="inline-block px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
              Urgent Hiring
            </span>
          )}
        </div>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-tight text-primary-foreground">
          {career.title}
        </h1>

        {/* Job Meta Info */}
        <div className="flex flex-wrap gap-6 mb-8 text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">{career.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            <span className="font-medium">{career.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">{career.experience} experience</span>
          </div>
          {career.salary && (
            <div className="flex items-center gap-2">
              <HandCoins className="h-5 w-5" />
              <span className="font-medium">{career.salary}</span>
            </div>
          )}
          {career.isOpen && (
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Open Position</span>
            </div>
          )}
          {career.postedDate && (
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Posted on {career.postedDate}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/careers/apply?job=${career.id}`}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-semibold"
          >
            Apply for This Position
            <ArrowRight className="h-5 w-5" />
          </Link>
          <CareerDetailsShareJobLink />
        </div>
      </div>
    </section>
  );
}
