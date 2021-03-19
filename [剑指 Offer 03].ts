//找出数组中重复的数字。
//
//
//在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请
//找出数组中任意一个重复的数字。
//
// 示例 1：
//
// 输入：
//[2, 3, 1, 0, 2, 5, 3]
//输出：2 或 3
//
//
//
//
// 限制：
//
// 2 <= n <= 100000
// Related Topics 数组 哈希表
// 👍 262 👎 0


// [剑指 Offer 03] 数组中重复的数字

//leetcode submit region begin(Prohibit modification and deletion)
function findRepeatNumber(nums: number[]): number {
  if (nums.length <= 2) {
    return -1;
  }

  debugger
  return findRepeatNumberByPigeonholePrinciple(nums);
}

/**
 * 方案：利用 object 属性的判重。
 *
 * is Pure function.
 *
 * time complexity: O(n).
 * space complexity: O(n).
 *
 * @param {number[]} nums, nums[i] between 0 and (nums.length - 1).
 * @return {number}, return -1 when not find repeat number.
 */
function findRepeatNumberByJSObject(nums: number[]): number {
  let obj: object = {};

  for (let num of nums) {
    if (!obj.hasOwnProperty(num)) {
      Object.defineProperty(obj, num, { value: 1 });
    } else {
      return num;
    }
  }

  return -1;
}

/**
 * 方案：鸽巢原理（Pigeonhole Principle）。
 *
 * isn't Pure function.
 *
 * time complexity: O(n).
 * space complexity: O(1).
 *
 * @param {number[]} nums, nums[i] between 0 and (nums.length - 1).
 * @return {number}, return -1 when not find repeat number.
 */
function findRepeatNumberByPigeonholePrinciple(nums: number[]): number {

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      // ex: nums[0] = 3, nums[3] = 3，即3为重复数值
      // @ts-ignore
      if (nums[i] === nums[nums[i]]) {
        // @ts-ignore
        return nums[i];
      }

      // swap(nums[i], nums[nums[i]])
      // @ts-ignore
      let temp = nums[nums[i]];
      // @ts-ignore
      nums[nums[i]] = nums[i];
      nums[i] = temp;
    }
  }

  return -1;
}

/**
 * 不适用于 Leetcode [剑指 Offer 3}
 *
 * 方案：利用二分法的思想，找出重复数字在哪个范围，然后不断缩小范围。
 * 适用：长度为 n 的数组中数字范围在 1~(n-1) 中
 * 不适用本题：长度为 n 的数组中数字范围在 0~(n-1) 中
 *
 * is Pure function.
 *
 * limitation: 不能保证找到所有重复的数字，例如 [2, 3, 5, 4, 3, 2, 6, 7] 中的 2 无法被找出
 *
 * time complexity: O(n*log(n)).
 * space complexity: O(1).
 *
 * @param {number[]} nums, nums[i] between 0 and (nums.length - 1).
 * @return {number}, return -1 when not find repeat number.
 */
function findRepeatNumberByCountRange(nums: number[]): number {
  let start: number = 0
    , end: number = nums.length - 1;

  while (end >= start) {
    let middle: number = start + ((end - start) >> 1)
      , count = countRange(nums, start, middle);

    // 锁定最后一个数
    if (start === end) {
      if (count > 1) {
        return start;
      } else {
        break;
      }
    }

    if (count > (middle - start + 1)) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }

  return -1;

  function countRange(nums: number[], start: number, end: number) {
    let count = 0;
    nums.forEach((num) => {
      if (start <= num && num <= end) {
        count++;
      }
    });

    return count;
  }
}

//leetcode submit region end(Prohibit modification and deletion)
export { findRepeatNumber };


