import {
  inorderTraversalByRecursion,
  postorderTraversalByRecursion,
  preorderTraversalByRecursion,
} from "../traversal/traversalByRecursion";
import { inorderTraversal, postorderTraversal, preorderTraversal } from "../traversal/traversalByNonRecursion";
import { createTreeFromArrayOfTree } from "../../util/treeNode";


//       1
//      / \
//     2   3
//      \
//       5
const testOne = createTreeFromArrayOfTree([1, 2, 3, null, 5]);
const preorderOfTestOne = [1, 2, 5, 3], inorderOfTestOne = [2, 5, 1, 3],
  postorderOfTestOne = [5, 2, 3, 1];

test("testTreeOne: preorderByRecursion", () => {
  expect(preorderTraversalByRecursion(testOne)).toEqual(preorderOfTestOne);
});
test("testTreeOne: preorderByNonRecursion", () => {
  expect(preorderTraversal(testOne)).toEqual(preorderOfTestOne);
});

test("testTreeOne: inorderByRecursion", () => {
  expect(inorderTraversalByRecursion(testOne)).toEqual(inorderOfTestOne);
});
test("testTreeOne: inorderByNonRecursion", () => {
  expect(inorderTraversal(testOne)).toEqual(inorderOfTestOne);
});

test("testTreeOne: postorderByRecursion", () => {
  expect(postorderTraversalByRecursion(testOne)).toEqual(postorderOfTestOne);
});
test("testTreeOne: inorderByNonRecursion", () => {
  expect(postorderTraversal(testOne)).toEqual(postorderOfTestOne);
});



//    3
//   / \
//  9  20
//    /  \
//   15   7
const testTwo = createTreeFromArrayOfTree([3, 9, 20, null, null, 15, 7]);
const preorderOfTestTwo = [3, 9, 20, 15, 7], inorderOfTestTwo = [9, 3, 15, 20, 7],
  postorderOfTestTwo = [9, 15, 7, 20, 3];

test("testTreeTwo: preorderByRecursion", () => {
  expect(preorderTraversalByRecursion(testTwo)).toEqual(preorderOfTestTwo);
});
test("testTreeTwo: preorderByNonRecursion", () => {
  expect(preorderTraversal(testTwo)).toEqual(preorderOfTestTwo);
});

test("testTreeTwo: inorderByRecursion", () => {
  expect(inorderTraversalByRecursion(testTwo)).toEqual(inorderOfTestTwo);
});
test("testTreeTwo: inorderByNonRecursion", () => {
  expect(inorderTraversal(testTwo)).toEqual(inorderOfTestTwo);
});

test("testTreeTwo: postorderByRecursion", () => {
  expect(postorderTraversalByRecursion(testTwo)).toEqual(postorderOfTestTwo);
});
test("testTreeTwo: inorderByNonRecursion", () => {
  expect(postorderTraversal(testTwo)).toEqual(postorderOfTestTwo);
});


