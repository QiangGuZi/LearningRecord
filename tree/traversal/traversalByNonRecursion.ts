import { TreeNode } from "../../util/treeNode";

function preorderTraversal(treeNode: TreeNode | null): number[] {
  const resultArr: number[] = [];
  const treeNodeStack: TreeNode[] = [];

  let node: TreeNode | null = treeNode;

  while (node !== null || treeNodeStack.length !== 0) {
    while (node !== null) {
      resultArr.push(node.val);
      treeNodeStack.push(node);
      node = node.left;
    }

    if (treeNodeStack.length > 0) {
      // @ts-ignore
      node = treeNodeStack.pop();
      // @ts-ignore
      node = node.right;
    }
  }

  return resultArr;
}

function inorderTraversal(treeNode: TreeNode | null): number[] {
  const resultArr: number[] = [];
  const treeNodeStack: TreeNode[] = [];

  let node: TreeNode | null = treeNode;

  while (node !== null || treeNodeStack.length !== 0) {
    while (node !== null) {
      treeNodeStack.push(node);
      node = node.left;
    }

    if (treeNodeStack.length > 0) {
      // @ts-ignore
      node = treeNodeStack.pop();
      // @ts-ignore
      resultArr.push(node.val);
      // @ts-ignore
      node = node.right;
    }
  }

  return resultArr;
}

function postorderTraversal(treeNode: TreeNode | null): number[] {
  const resultArr: number[] = [];
  const treeNodeStack: TreeNode[] = [];

  let node: TreeNode | null = treeNode, lastVisit = treeNode;

  while (node !== null || treeNodeStack.length !== 0) {
    while (node !== null) {
      treeNodeStack.push(node);
      node = node.left;
    }

    // @ts-ignore
    node = treeNodeStack[treeNodeStack.length - 1];

    // this line is useless and has the effort of avoiding foolish checks from ts-config
    if (node == null) {continue;}

    if (node.right == null || node.right == lastVisit) {
      resultArr.push(node.val);
      treeNodeStack.pop();
      lastVisit = node;
      node = null;
    } else {
      node = node.right;
    }
  }


  return resultArr;
}

export { preorderTraversal, inorderTraversal, postorderTraversal };
