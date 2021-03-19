class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * example：
 *
 *      1
 *     / \
 *    2   3
 *     \
 *      5
 *
 * "[1, 2, 3, null, 5, null, null]"

 * @param {Array<number | null>} array
 * @return {TreeNode | null}
 */
function createTreeFromArrayOfTree(array: Array<number | null>): TreeNode | null {
  if (array.length === 0 || array[0] == null) {
    return null;
  }

  let nodeArray: (TreeNode | null)[] = array.map((val) => {
    if (val == null) {
      return null;
    }

    return new TreeNode(val);
  });

  for (let i = 0; i < nodeArray.length; i++) {
    const treeNode = nodeArray[i];
    if (treeNode != null) {
      // (2*i + 1) 会越界
      treeNode.left = nodeArray[2 * i + 1] || null;
      treeNode.right = nodeArray[2 * i + 2] || null;
    }
  }

  // foolish check!
  // @ts-ignore
  return nodeArray[0];
}

function f() {

}

export { TreeNode, createTreeFromArrayOfTree };

