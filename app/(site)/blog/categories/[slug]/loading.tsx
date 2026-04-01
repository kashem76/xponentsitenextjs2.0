// app/(site)/blog/categories/[slug]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-linear-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Skeleton className="h-5 w-28 mb-8" />

          <div className="text-center">
            {/* Category Badge */}
            <Skeleton className="h-10 w-28 rounded-full mx-auto mb-6" />

            {/* Title */}
            <Skeleton className="h-12 lg:h-16 w-64 mx-auto mb-6" />

            {/* Description */}
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-2" />
            <Skeleton className="h-6 w-3/4 max-w-xl mx-auto mb-6" />

            {/* Post Count */}
            <Skeleton className="h-5 w-32 mx-auto" />
          </div>
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="p-8">
                  {/* Category Badge */}
                  <Skeleton className="h-7 w-24 rounded-full mb-4" />

                  {/* Title */}
                  <Skeleton className="h-7 w-full mb-2" />
                  <Skeleton className="h-7 w-3/4 mb-3" />

                  {/* Excerpt */}
                  <div className="space-y-2 mb-6">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>

                  {/* Read More */}
                  <Skeleton className="h-5 w-28" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="flex justify-center gap-2 pt-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-full" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
