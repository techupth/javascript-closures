import fs from "fs/promises";

describe("exercise 1: Closures tests cases", () => {
  test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return addByX`;

    const func = new Function(code);
    const addByX = func();
    const addByTwo = addByX(2);
    const addByThree = addByX(3);

    expect(addByTwo(1)).toBe(3);
    expect(addByThree(1)).toBe(4);
  });
});
