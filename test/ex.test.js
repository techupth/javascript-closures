import fs from "fs/promises";

describe("Closures tests cases", () => {
  test("exercise 1: Add By X", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return addByX`;

    const func = new Function(code);
    const addByX = func();
    const addByTwo = addByX(2);
    const addByThree = addByX(3);

    expect(addByTwo(1)).toBe(3);
    expect(addByThree(1)).toBe(4);
  });

  test("exercise 2: Match Action", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return matchAction`;

    const func = new Function(code);
    const matchAction = func();
    const addByTwo = matchAction(2);
    const subtractByThree = matchAction(3);

    expect(addByTwo.addByX(1)).toBe(3);
    expect(addByTwo.addByX(2)).toBe(4);

    expect(subtractByThree.subtractByX(4)).toBe(1);
  });
});
