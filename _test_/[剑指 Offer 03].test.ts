import { findRepeatNumber} from "../[剑指 Offer 03]";

/**
 * 记录一个耗了我两小时的一个设置
 * tsconfig.json 中的 compilerOptions 的 typeRoots&types，
 * 默认所有可见的"@types"包会在编译过程中被包含进来。
 *
 * 若指定了两者，则只有两者包括的包才会被包含进来。
 *
 * 我之前将两者都设置为 []，则 ts-jest 的 test 声明未被包含进来
 *
 * 参考：https://www.tslang.cn/docs/handbook/tsconfig-json.html
 */
test("findRepeatNumber([0, 1, 2, 3, 4, 5, 0]) return 0", () => {
  expect(findRepeatNumber([0, 1, 2, 3, 4, 5, 0])).toBe(0);
})

test("findRepeatNumber([1, 2, 3 ,4, 0 ,5, 0]) return 0", () => {
  expect(findRepeatNumber([1, 2, 3 ,4, 0 ,5, 0])).toBe(0);
})

test("findRepeatNumber([0, 1, 2, 3, 4, 5, 6]) return -1", () => {
  expect(findRepeatNumber([0, 1, 2, 3 ,4 ,5 ,6])).toBe(-1);
})

test("findRepeatNumber([1]) return -1", () => {
  expect(findRepeatNumber([1])).toBe(-1);
})

export {}
