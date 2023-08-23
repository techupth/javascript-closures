import fs from "fs/promises";

describe("exercise 4: Closures tests cases", () => {
  test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-4.js");
    const code = `${data} \n return { removeDuplicates }`;

    const func = new Function(code);
    const { removeDuplicates } = func();
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
