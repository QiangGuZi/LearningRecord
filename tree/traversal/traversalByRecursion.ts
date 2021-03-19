import { TreeNode } from "../../util/treeNode";

/**
 * preorder Traversal by recursion
 * @param {TreeNode} treeNode
 * @return {number[]}
 */
function preorderTraversalByRecursion(treeNode: TreeNode | null): number[] {
  let resultArr: number[] = [];
  preorderTraversalByRecursionCore(treeNode, resultArr);

  return resultArr;
}

/**
 * the core of preorder Traversal by recursion
 * @param {TreeNode | null} treeNode
 * @param {number[]} result
 */
function preorderTraversalByRecursionCore(treeNode: TreeNode | null, result: number[]) {
  if (treeNode == null) { return; }

  result.push(treeNode.val);
  preorderTraversalByRecursionCore(treeNode.left, result);
  preorderTraversalByRecursionCore(treeNode.right, result);
}


/**
 * inorder Traversal by recursion
 * @param {TreeNode} treeNode
 * @return {number[]}
 */
function inorderTraversalByRecursion(treeNode: TreeNode | null): number[] {
  let resultArr: number[] = [];

  inorderTraversalByRecursionCore(treeNode, resultArr);

  return resultArr;
}

/**
 * the core of inorder Traversal by recursion
 * @param {TreeNode | number} treeNode
 * @param {number[]} result
 */
function inorderTraversalByRecursionCore(treeNode: TreeNode | null, result: number[]) {
  if (treeNode == null) { return; }

  inorderTraversalByRecursionCore(treeNode.left, result);
  result.push(treeNode.val);
  inorderTraversalByRecursionCore(treeNode.right, result);
}


/**
 * postorder Traversal by recursion
 * @param {TreeNode} treeNode
 * @return {number[]}
 */
function postorderTraversalByRecursion(treeNode: TreeNode | null): number[] {
  let resultArr: number[] = [];

  postTraversalByRecursionCore(treeNode, resultArr);

  return resultArr;
}

//       1
//      / \
//     2   3
//      \
//       5
/**
 * the core of postorder Traversal by recursion
 * @param {TreeNode | number} treeNode
 * @param {number[]} result
 */
function postTraversalByRecursionCore(treeNode: TreeNode | null, result: number[]) {
  if (treeNode == null) { return; }

  debugger
  postTraversalByRecursionCore(treeNode.left, result);
  postTraversalByRecursionCore(treeNode.right, result);
  result.push(treeNode.val);
}

export { preorderTraversalByRecursion, inorderTraversalByRecursion, postorderTraversalByRecursion };
