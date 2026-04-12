// components/careers/careers-positions-section.tsx

import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import careersData from "@/lib/data/careers.json";
import { ICareer } from "@/lib/types/careers.types";

export default function CareersPositionsSection() {
  const { careers } = careersData as { careers: ICareer[] };

  // Filter only open positions, sort urgent first then by newest postedDate
  const openPositions = careers
    .filter((career) => career.isOpen)
    .sort((a, b) => {
      if (a.urgent && !b.urgent) return -1;
      if (!a.urgent && b.urgent) return 1;
      return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
    });

  return (
    <section
      id="open-positions"
      className="py-20 lg:py-24 px-6 lg:px-8 bg-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our growing team and help build the future of business
            technology.
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((career) => (
            <Link
              key={career.id}
              href={`/careers/${career.id}`}
              className="group block bg-card p-8 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {career.title}
                    </h3>
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                      {career.department}
                    </span>
                    {career.urgent && (
                      <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full uppercase tracking-wide animate-pulse">
                        Urgent
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                    {career.overview.split(".")[0]}.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{career.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{career.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{career.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold lg:shrink-0">
                  View Details
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
