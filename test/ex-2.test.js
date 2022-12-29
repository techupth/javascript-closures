import fs from "fs/promises";

describe("exercise 2: Closures tests cases", () => {

  test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} \n return {addByTwo, subtractByThree}`;

    const func = new Function(code);
    const { addByTwo, subtractByThree } = func();

    expect(addByTwo.addByX(1)).toBe(3);
    expect(addByTwo.addByX(2)).toBe(4);
    expect(addByTwo.addByX(3)).toBe(5);

    expect(subtractByThree.subtractByX(4)).toBe(1);
    expect(subtractByThree.subtractByX(6)).toBe(3);
    expect(subtractByThree.subtractByX(8)).toBe(5);
  });
});
