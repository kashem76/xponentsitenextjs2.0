// app/(site)/blog/[slug]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-5 w-28" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <Skeleton className="h-8 w-32 rounded-full mb-6" />

          {/* Title */}
          <Skeleton className="h-12 lg:h-14 w-full mb-3" />
          <Skeleton className="h-12 lg:h-14 w-3/4 mb-6" />

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-5 w-28" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-5 w-32" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="w-full aspect-video rounded-2xl" />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto space-y-4">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />

          <Skeleton className="h-8 w-64 mt-10 mb-4" />

          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />

          <Skeleton className="h-8 w-48 mt-10 mb-4" />

          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-full" />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-44 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <Skeleton className="w-full aspect-video" />
                <div className="p-6">
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-28 mt-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16 px-6 lg:px-8 bg-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-10 w-96 max-w-full mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-2" />
          <Skeleton className="h-6 w-3/4 max-w-xl mx-auto mb-8" />
          <Skeleton className="h-14 w-40 mx-auto rounded-lg" />
        </div>
      </section>
    </div>
  );
}
