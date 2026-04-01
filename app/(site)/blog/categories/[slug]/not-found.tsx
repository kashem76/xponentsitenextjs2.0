// app/(site)/blog/categories/[slug]/not-found.tsx
import Link from "next/link";
import { FolderSearch, ArrowLeft, Search } from "lucide-react";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-linear-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Not Found Content */}
          <div className="flex flex-col items-center justify-center text-center py-12">
            {/* Icon */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <FolderSearch className="w-12 h-12 text-primary" />
            </div>

            {/* 404 Text */}
            <span className="text-6xl lg:text-7xl font-bold text-primary/20 mb-4">
              404
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Category Not Found
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              The category you&apos;re looking for doesn&apos;t exist or has
              been removed.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/categories"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Search className="w-4 h-4" />
                Browse All Categories
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Xponent can help you build custom software,
            automate processes, and achieve your digital goals.
          </p>
          <Link href="/#contact">
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
