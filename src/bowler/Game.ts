export default class Game {
  private points = 0;
  score(): number {
    return this.points;
  }

  roll(arg: number) {
    this.points = arg;
  }
}
