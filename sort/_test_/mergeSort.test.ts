import { mergeSort } from "../mergeSort";

function comparison(a: number, b: number) {
  return a - b;
}

const testOne = [5, 4, 3, 2, 1];
test("quickSort(5, 4, 3, 2, 1)", () => {
  expect(mergeSort(testOne)).toEqual(testOne.sort(comparison));
});

const testTwo = [1, 0, 0, 0, 0];
test("quickSort([1, 0, 0, 0 ,0])", () => {
  expect(mergeSort([1, 0, 0, 0, 0])).toEqual(testTwo.sort(comparison));
});

const testThree = [9, 8, 7, 6, 5, 4];
test("quickSort([9, 8, 7, 6, 5, 4])", () => {
  expect(mergeSort([9, 8, 7, 6, 5, 4])).toEqual(testThree.sort(comparison));
});
