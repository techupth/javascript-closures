import fs from "fs/promises";

describe("exercise 1: Closures tests cases", () => {
  test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} \n return {addByTwo, addByThree}`;
    const func = new Function(code);
    const { addByTwo, addByThree } = func();

    expect(addByTwo(1)).toBe(3);
    expect(addByTwo(2)).toBe(4);
    expect(addByTwo(3)).toBe(5);
    expect(addByThree(1)).toBe(4);
    expect(addByThree(2)).toBe(5);
  });
});
