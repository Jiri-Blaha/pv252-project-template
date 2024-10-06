import { fibonacci } from "./fibonacci.ts";

test("fibonacci-5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("fibonacci-negative", () => {
  expect(() => fibonacci(-10)).toThrow(Error("Cannot compute on negative numbers"));
});
