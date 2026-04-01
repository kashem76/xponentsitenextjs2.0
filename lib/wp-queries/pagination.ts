// lib/wp-queries/pagination.ts
export const PER_PAGE_FIRST = 9; // No of posts to be shown on first page.
export const PER_PAGE_REST = 9; // No of posts to be shown following page and after.
export const MAX_NUM_PAGES = 9;

export const getPageOffset = (pageNo: number) => {
  /**
   * Offset is how many posts are already shown ( meaning, after how many posts should we start qurying ).
   * @type {number}
   */
  let offset = 0;
  pageNo = Number(pageNo);
  if (1 === pageNo) {
    offset = 0;
  } else if (2 === pageNo) {
    offset = PER_PAGE_FIRST;
  } else {
    offset = PER_PAGE_FIRST + (pageNo - 2) * PER_PAGE_REST;
  }
  return offset;
};

export const totalPagesCount = (totalPostsCount: number) => {
  return Math.ceil((totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1);
};

export function getPages(
  pagesCount: number,
  currentPage: number,
  // hasNextDots: boolean,
  // hasPrevDots: boolean,
): number[] {
  let pages = pagesCount;
  let start = 0;
  // If the number of pages exceeds the max
  if (pagesCount > MAX_NUM_PAGES) {
    // Set number of pages to the max
    pages = MAX_NUM_PAGES;
    const half = Math.ceil(MAX_NUM_PAGES / 2);
    const isHead = currentPage <= half;
    const isTail = currentPage > pagesCount - half;
    // hasNextDots = !isTail;
    // If the current page is at the head, the start variable remains 0
    if (!isHead) {
      // hasPrevDots = true;
      // If the current page is at the tail, the start variable is set to
      // the last chunk. Otherwise the start variable will place the current
      // page at the middle
      start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
    }
  }
  return [...new Array(pages)].map((_, i) => i + 1 + start);
}
