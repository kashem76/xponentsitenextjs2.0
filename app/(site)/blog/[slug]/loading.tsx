// app/(site)/blog/[slug]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Skeleton className="h-4 w-24 mb-8 bg-white/20" />

          {/* Category badge */}
          <Skeleton className="h-7 w-28 rounded-full mb-5 bg-white/20" />

          {/* Title */}
          <Skeleton className="h-10 w-full mb-3 bg-white/20" />
          <Skeleton className="h-10 w-4/5 mb-3 bg-white/20" />
          <Skeleton className="h-10 w-2/3 mb-6 bg-white/20" />

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-7 w-7 rounded-full bg-white/20" />
              <Skeleton className="h-4 w-28 bg-white/20" />
            </div>
            <Skeleton className="h-4 w-32 bg-white/20" />
            <Skeleton className="h-4 w-20 bg-white/20" />
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <Skeleton className="w-full aspect-video" />

      {/* Content + Sidebar */}
      <div className="px-6 lg:px-8 py-14">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Article skeleton */}
          <div className="flex-1 min-w-0 space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />

            <Skeleton className="h-8 w-56 mt-10" />

            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />

            <Skeleton className="h-8 w-44 mt-10" />

            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/5" />

            <Skeleton className="h-8 w-52 mt-10" />

            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>

          {/* Sidebar skeleton */}
          <div className="w-full lg:w-60 xl:w-72 shrink-0 space-y-6">
            {/* Author card */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <Skeleton className="h-3 w-20" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-11 w-11 rounded-full" />
                <div className="space-y-1.5">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            </div>

            {/* Tags card */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <Skeleton className="h-3 w-12" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-14 rounded-full" />
              </div>
            </div>

            {/* CTA card */}
            <Skeleton className="rounded-xl h-36" />
          </div>

        </div>
      </div>

      {/* Related Posts */}
      <section className="py-16 px-6 lg:px-8 border-t border-border bg-muted">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-44 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <Skeleton className="w-full aspect-video" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <div className="flex justify-between pt-2">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
