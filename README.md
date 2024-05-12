# `createComparator` 

Helpers for sorting arrays with `Array.prototype.sort` or `Array.prototype.toSorted`

## Example

```ts
import { createComparator } from "jsr:@langpavel/create-comparator";

const table = [
  {i: 2, s: "E", n: 8, bi: 8n},
  {i: 2, s: "G", n: 6, bi: 6n},
  {i: 3, s: "W", n: 5, bi: 9n},
  {i: 2, s: "X", n: 9, bi: 5n},
]

const sortedTableBy_i_then_s_DESC = table.toSorted(
  createComparator(
    (asc) => asc.i,
    (_, desc) => desc.s,
  )
);

console.table(sortedTableBy_i_then_s_DESC);

```