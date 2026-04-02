import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IService } from "@/lib/types/services.types";
import { getIconComponent } from "@/lib/utils/products/get-icon-component";

interface IServicesOverviewGridSectionProps {
  services: IService[];
}

export default function ServicesOverviewGridSection({
  services,
}: IServicesOverviewGridSectionProps) {
  return (
    <div className="max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {services.map((service) => (
        <Link
          key={service.id}
          href={`/services/${service.id}`}
          className="group bg-card p-8 rounded-xl border-4 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-xl"
        >
          <div className="mb-6">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 mb-4">
              {getIconComponent({ iconName: service.icon })}
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {service.name}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary font-semibold">
            Learn more
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      ))}
    </div>
  );
}
