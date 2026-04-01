// app/(site)/blog/[slug]/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function BlogPostError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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

      {/* Error Content */}
      <div className="px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-20">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Failed to Load Article
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              We encountered an error while loading this article. Please try
              again.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
