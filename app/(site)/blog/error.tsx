"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function BlogError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-linear-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
          {/* Error Icon */}
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>

          {/* Error Message */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Something went wrong!
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            We encountered an error while loading the blog. Please try again.
          </p>

          {/* Reset Button */}
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
