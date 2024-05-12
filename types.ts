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
