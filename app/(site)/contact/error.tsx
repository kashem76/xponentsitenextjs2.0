// app/(site)/contact/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ContactError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-linear-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8">
              <AlertCircle className="w-10 h-10 text-destructive" />
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Something Went Wrong
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8">
              We encountered an error while loading this page. Please try again.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
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
      </section>
    </div>
  );
}
