// app/careers/[careerId]/not-found.tsx

import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function CareerNotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Career Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          The career position you&apos;re looking for doesn&apos;t exist or has
          been removed.
        </p>
        <Link href="/careers">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
            View All Open Positions
          </button>
        </Link>
      </div>
    </div>
  );
}
