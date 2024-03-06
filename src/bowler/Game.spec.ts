import Game from "./Game";

describe("Bowling kata tests", () => {
  test("Get roll result", () => {
    const game = new Game();

    game.roll(10);
    const score = game.score();

    expect(score).toEqual(10);
  });
});
