// app/(site)/contact/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <Skeleton className="h-12 lg:h-16 w-80 mx-auto mb-6 bg-primary-foreground/20" />
            <Skeleton className="h-6 w-96 max-w-full mx-auto bg-primary-foreground/20" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card shadow-xl rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left Side Skeleton */}
              <Skeleton className="h-[400px] lg:h-[450px]" />

              {/* Right Side Skeleton */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <Skeleton className="h-6 w-48 mb-4" />
                <Skeleton className="h-4 w-full max-w-md mb-2" />
                <Skeleton className="h-4 w-3/4 max-w-sm mb-10" />
                <Skeleton className="h-12 w-32 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
