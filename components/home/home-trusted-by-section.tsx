import { HOME_TRUSTED_COMPANIES } from "@/lib/constants/home.constants";
import Image from "next/image";

export default function HomeTrustedBySection() {
  return (
    <section className="py-12 lg:py-16 px-6 lg:px-8 bg-muted/20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wide">
          Trusted by Leading Organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-100">
          {HOME_TRUSTED_COMPANIES.map((company, index) => (
            <div
              key={index}
              className="text-xl font-bold text-muted-foreground"
            >
              {company.logo ? (
                <Image
                  src={company.logo}
                  width={120}
                  height={60}
                  alt={`${company.name} logo`}
                  className="h-12 mt-2 object-contain"
                />
              ) : (
                company.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
