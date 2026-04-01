// lib/wp-queries/datetime.ts
import { format } from "date-fns";

/**
 * formatDate
 */
export function formatDate(
  date: Date | string | number,
  pattern: string = "PPP",
): string {
  return format(new Date(date), pattern);
}

/**
 * sortObjectsByDate
 */
export function sortObjectsByDate<T extends Record<string, any>>(
  array: T[],
  options?: { key?: keyof T },
): T[] {
  const key = options?.key ?? ("date" as keyof T);

  return array.sort((a, b) => {
    const dateB = new Date(b[key] as any).getTime();
    const dateA = new Date(a[key] as any).getTime();
    return dateB - dateA;
  });
}
