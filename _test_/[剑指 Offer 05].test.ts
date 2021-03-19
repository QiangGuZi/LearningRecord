import { replaceSpace } from "../[剑指 Offer 05]";

// 有空格
test("replaceSpace(\" We are  family \") return \"%20We%20are%20%20family%20\"", () => {
  expect(replaceSpace(" We are  family ")).toBe("%20We%20are%20%20family%20");
})

// 无空格
test("replaceSpace(\"NoBlankHere\") return \"NoBlankHere\"", () => {
  expect(replaceSpace("NoBlankHere")).toBe("NoBlankHere");
})

// 空字符串
test("replaceSpace(\"\") return \"\"", () => {
  expect(replaceSpace("")).toBe("");
})

export {}
