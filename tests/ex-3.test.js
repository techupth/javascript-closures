import fs from "fs/promises";

describe("exercise 3: Closures tests cases", () => {
  test("เมื่อ console.log แล้วต้องแสดงผลตามที่โจทย์กำหนด", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} \n return { total }`;

    const func = new Function(code);
    const { total } = func();

    expect(total).toBe(1995600.22);
  });
});
