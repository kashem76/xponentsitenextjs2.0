// components/blog/blog-pagination.tsx
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPages } from "@/lib/wp-queries/pagination";

interface PaginationProps {
  pagesCount: number;
  basePath: string;
  currentPage: number;
}

export default function BlogPagePagination({
  pagesCount,
  basePath,
  currentPage,
}: PaginationProps) {
  if (!pagesCount || pagesCount <= 1 || !basePath) {
    return null;
  }

  const pages = getPages(pagesCount, currentPage);

  // Generate URL for a given page
  const getHref = (page: number) =>
    page === 1 ? basePath : `${basePath}/page/${page}`;

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= pagesCount;

  return (
    <nav
      className="flex items-center justify-center py-8"
      aria-label="Blog pagination"
    >
      <div className="flex items-center justify-center gap-2">
        {/* Previous Button */}
        {isFirstPage ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground/50 cursor-not-allowed">
            <ArrowLeft className="h-5 w-5" />
          </span>
        ) : (
          <Link
            href={getHref(currentPage - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Previous page"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        )}

        {/* Page Numbers */}
        <div className="hidden items-center gap-2 md:flex">
          {pages.map((page, index) => {
            // Check if we need to show ellipsis
            const prevPage = pages[index - 1];
            const showEllipsisBefore =
              typeof page === "number" &&
              typeof prevPage === "number" &&
              page - prevPage > 1;

            return (
              <div
                key={`page-${page}-${index}`}
                className="flex items-center gap-2"
              >
                {showEllipsisBefore && (
                  <span className="flex h-10 w-10 items-center justify-center text-sm text-muted-foreground">
                    ...
                  </span>
                )}
                <Link
                  href={getHref(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                    page === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                  aria-current={page === currentPage ? "page" : undefined}
                >
                  {page}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile Current Page Indicator */}
        <span className="px-4 text-sm text-muted-foreground md:hidden">
          {currentPage} / {pagesCount}
        </span>

        {/* Next Button */}
        {isLastPage ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground/50 cursor-not-allowed">
            <ArrowRight className="h-5 w-5" />
          </span>
        ) : (
          <Link
            href={getHref(currentPage + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Next page"
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
        )}
      </div>
    </nav>
  );
}
