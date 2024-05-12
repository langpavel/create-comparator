import { assertEquals } from "jsr:@std/assert";

import { createComparator } from "./createComparator.ts";

Deno.test("createComparator can sort by identity", () => {
  const testData = [2, 1, 3];
  const sorted = testData.toSorted(createComparator(
    (value) => value,
  ));
  assertEquals(sorted, [1, 2, 3]);
});

Deno.test("createComparator can sort by identity (DESC)", () => {
  const testData = [2, 1, 3];
  const sorted = testData.toSorted(createComparator(
    (_, value) => value,
  ));
  assertEquals(sorted, [3, 2, 1]);
});
