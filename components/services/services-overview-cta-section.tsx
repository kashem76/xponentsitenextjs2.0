import Link from "next/link";

export default function ServicesOverviewCtaSection() {
  return (
    <div className="mt-20 text-center bg-muted/20 p-12 rounded-2xl">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">
        Not Sure Where to Start?
      </h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        Schedule a free consultation with our team to discuss your needs and
        explore the best solutions for your business.
      </p>
      <Link href="/#contact">
        <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
          Book a Strategy Call
        </button>
      </Link>
    </div>
  );
}
