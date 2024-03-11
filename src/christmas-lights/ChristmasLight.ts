export default class ChristmasLight {
  private lights: number[][];

  initialize() {
    const grid: number[][] = [];

    for (let i = 0; i < 1000; i++) {
      let row = [];

      for (let j = 0; j < 1000; j++) {
        row.push(0);
      }

      grid.push(row);
    }

    this.lights = grid;
    return this.lights;
  }

  execute(from: number[], to: number[], action: "on" | "off" | "toggle") {
    if (!this.lights) {
      this.initialize();
    }

    for (let i = from[0]; i <= to[0]; i++) {
      for (let j = from[1]; j <= to[1]; j++) {
        switch (action) {
          case "toggle":
            this.lights[i][j] += 2;
            continue;
          case "on":
            this.lights[i][j]++;
            continue;
          case "off":
            this.lights[i][j] = Math.max(0, this.lights[i][j] - 1);
            continue;
        }
      }
    }

    return this.lights;
  }

  countTrueValues() {
    const totalLights = this.lights.reduce(
      (acc, curr) => acc + curr.reduce((acc, val) => acc + val, 0),
      0
    );

    console.log("Lights: ", totalLights);
    return totalLights;
  }
}
