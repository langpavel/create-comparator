/**
 * Represents any comparable value. (operator `<` and `>`)
 */
export type Comparable = unknown;

/**
 * A selector function that returns a comparable value for a given object.
 */
export type ComparatorSelector<T> = (
  ascending_order: T,
  descending_order: T,
) => Comparable;

/**
 * A function that can be used by the `Array.prototype.sort` method.
 */
export type CompareFn<T> = (a: T, b: T) => number;

/**
 * Creates a comparator function that can be used to sort an array of objects.
 */
export const createComparator = <T>(
  ...selectors: ComparatorSelector<T>[]
): CompareFn<T> => {
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
};
