import type { ComparatorSelector, CompareFn } from "./types.ts";

/**
 * Creates a comparator function that can be used to sort an array of objects.
 */
export function createComparator<T>(
  ...selectors: ComparatorSelector<T>[]
): CompareFn<T> {
  return (a: T, b: T) => {
    for (const selector of selectors) {
      const valA = selector(a, b);
      if (valA === null || valA === undefined) continue;
      const valB = selector(b, a);
      if (valB === null || valB === undefined || valA == valB) continue;
      if (valA < valB) return -1;
      if (valA > valB) return 1;
    }
    return 0;
  };
}
