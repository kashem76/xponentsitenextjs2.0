import { HOME_TRUSTED_COMPANIES } from "@/lib/constants/home.constants";

export default function HomeTrustedBySection() {
  return (
    <section className="py-12 lg:py-16 px-6 lg:px-8 bg-muted/20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wide">
          Trusted by Leading Organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {HOME_TRUSTED_COMPANIES.map((company, index) => (
            <div
              key={index}
              className="text-xl font-bold text-muted-foreground"
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
