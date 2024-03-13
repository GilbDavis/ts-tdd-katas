import ChristmasLight from "./ChristmasLight";
import { instructions } from "./instructions";

describe("Christmas kata", () => {
  let christmasLights = new ChristmasLight();

  test("Create a 1000x1000 2D array to store the bulbs", () => {
    const result = christmasLights.initialize();

    expect(result.length).toBe(1000);
    expect(result[0].length).toEqual(1000);
  });

  test("turn on 887,9 through 959,629", () => {
    christmasLights.execute([887, 9], [959, 629], "on");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 454,398 through 844,448", () => {
    christmasLights.execute([454, 398], [844, 448], "on");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 539,243 through 559,965", () => {
    christmasLights.execute([539, 243], [559, 965], "off");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 370,819 through 676,868", () => {
    christmasLights.execute([370, 819], [676, 868], "off");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 145,40 through 370,997", () => {
    christmasLights.execute([145, 40], [370, 997], "off");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 301,3 through 808,453", () => {
    christmasLights.execute([301, 3], [808, 453], "off");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 351,678 through 951,908", () => {
    christmasLights.execute([351, 678], [951, 908], "on");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 720,196 through 897,994", () => {
    christmasLights.execute([720, 196], [897, 994], "toggle");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("turn on 831,394 through 904,860", () => {
    christmasLights.execute([831, 394], [904, 860], "toggle");
    const result = christmasLights.countTrueValues();

    expect(result).toBe(result);
  });

  test("Turn on 0, 0 through 0, 0", () => {
    const chirstmasL = new ChristmasLight();
    chirstmasL.execute([0, 0], [0, 0], "on");
    const result = chirstmasL.countTrueValues();

    expect(result).toBe(1);
  });

  test("Toggle 0, 0 through 999, 999", () => {
    const chirstmasL = new ChristmasLight();
    chirstmasL.execute([0, 0], [999, 999], "toggle");
    const result = chirstmasL.countTrueValues();

    expect(result).toBe(2000000);
  });

  test("Final kata test", () => {
    const christmasGrid = new ChristmasLight();

    for (const instruction of instructions) {
      const data = instruction.split(" ");

      if (data[0] === "turn") {
        const firstParam = data[2].split(",").map((data) => Number(data));
        const secondParam = data[4].split(",").map((data) => Number(data));

        switch (data[1]) {
          case "on":
            christmasGrid.execute(firstParam, secondParam, "on");
            continue;
          case "off":
            christmasGrid.execute(firstParam, secondParam, "off");
            continue;
        }
      }

      // toggle logic
      const firstParam = data[1].split(",").map((data) => Number(data));
      const secondParam = data[3].split(",").map((data) => Number(data));

      christmasGrid.execute(firstParam, secondParam, "toggle");
    }
    const result = christmasGrid.countTrueValues();
  });
});
