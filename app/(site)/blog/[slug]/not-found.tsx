// app/(site)/blog/[slug]/not-found.tsx
import Link from "next/link";
import { FileQuestion, Search, ArrowLeft, Home } from "lucide-react";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Not Found Content */}
      <div className="px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-20">
            {/* 404 Icon */}
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8">
              <FileQuestion className="w-12 h-12 text-primary" />
            </div>

            {/* 404 Text */}
            <span className="text-6xl lg:text-7xl font-bold text-primary/20 mb-4">
              404
            </span>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Article Not Found
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              The article you&apos;re looking for doesn&apos;t exist, has been
              moved, or is no longer available.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Search className="w-4 h-4" />
                Browse All Articles
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>

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
