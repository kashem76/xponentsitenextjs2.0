import Link from "next/link";

export default function BlogOverviewCtaSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
          {`Let's Build Something Amazing Together`}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {`Ready to transform your business with custom software and AI automation?`}
        </p>
        <Link
          href="/contact"
          className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
        >
          {`Get Started`}
        </Link>
      </div>
    </section>
  );
}
