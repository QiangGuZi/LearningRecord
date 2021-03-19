import { findNumberIn2DArray } from "../[剑指 Offer 04]"

test("findRepeatNumber([\n" +
  " [1,   4,  7, 11, 15],\n" +
  " [2,   5,  8, 12, 19],\n" +
  " [3,   6,  9, 16, 22],\n" +
  " [10, 13, 14, 17, 24],\n" +
  " [18, 21, 23, 26, 30]\n" +
  "], 5) return true", () => {
  expect(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 5)).toBe(true);
})

test("findRepeatNumber([\n" +
  " [1,   4,  7, 11, 15],\n" +
  " [2,   5,  8, 12, 19],\n" +
  " [3,   6,  9, 16, 22],\n" +
  " [10, 13, 14, 17, 24],\n" +
  " [18, 21, 23, 26, 30]\n" +
  "], 20) return false", () => {
  expect(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 20)).toBe(false);
})

test("findRepeatNumber([], 20) return false", () => {
  expect(findNumberIn2DArray([], 20)).toBe(false);
})

export {}
