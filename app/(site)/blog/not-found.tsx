import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-linear-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
          {/* 404 Text */}
          <span className="text-8xl lg:text-9xl font-bold text-primary/20 mb-4">
            404
          </span>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Blog Post Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            {`The blog post you're looking for doesn't exist or has been moved.`}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <Search className="w-4 h-4" />
              Browse Blog
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
  );
}
