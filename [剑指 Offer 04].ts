//在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个
//整数，判断数组中是否含有该整数。
//
//
//
// 示例:
//
// 现有矩阵 matrix 如下：
//
//
// [
//  [1,   4,  7, 11, 15],
//  [2,   5,  8, 12, 19],
//  [3,   6,  9, 16, 22],
//  [10, 13, 14, 17, 24],
//  [18, 21, 23, 26, 30]
// ]
//
//
// 给定 target = 5，返回 true。
//
// 给定 target = 20，返回 false。
//
//
//
// 限制：
//
// 0 <= n <= 1000
//
// 0 <= m <= 1000
//
//
//
// 注意：本题与主站 240 题相同：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
// Related Topics 数组 双指针
// 👍 214 👎 0


// [剑指 Offer 04] 二维数组中的查找

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * matrix can be thought of as a search binary tree
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  // @ts-ignore
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  let rows: number = matrix.length
    // @ts-ignore
    , columns: number = matrix[0].length
    , row = 0
    , column = columns - 1;

  while (row < rows && column >= 0) {
    // todo: num could be replaced by a better name.
    // @ts-ignore
    let num = matrix[row][column];

    if (num === target) {
      return true;
      // @ts-ignore
    } else if (num > target) {
      column--;
    } else {
      row++;
    }
  }

  return false;
}

//leetcode submit region end(Prohibit modification and deletion)


export { findNumberIn2DArray };
