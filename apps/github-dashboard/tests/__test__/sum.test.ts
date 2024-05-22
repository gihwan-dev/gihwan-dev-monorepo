import { describe, expect, it } from "vitest";

function sum(a: number, b: number) {
  return a + b;
}

describe("sum", () => {
  it("1 + 1 = 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
