//请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
//
//
//
// 示例 1：
//
// 输入：s = "We are happy."
//输出："We%20are%20happy."
//
//
//
// 限制：
//
// 0 <= s 的长度 <= 10000
// 👍 64 👎 0


// [剑指 Offer 05] 替换空格

//leetcode submit region begin(Prohibit modification and deletion)
function replaceSpace(s: string): string {
  let countOfBlank = 0;
  const blank: string = " ";

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == blank)
      countOfBlank++;
  }

  let result: string[] = Array(s.length + (countOfBlank * 2));

  for (let i = result.length - 1, j = s.length - 1; i >= 0 && i >= j && j >= 0; j--) {
    if (s.charAt(j) === blank) {
      result[i--] = "0";
      result[i--] = "2";
      result[i--] = "%";
    } else {
      result[i--] = s.charAt(j);
    }
  }

  return result.join("");
}

//leetcode submit region end(Prohibit modification and deletion)

export { replaceSpace };
