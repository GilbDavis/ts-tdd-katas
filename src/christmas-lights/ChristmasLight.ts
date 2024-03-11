export default class ChristmasLight {
  private lights: boolean[][];

  initialize() {
    const grid = [];

    for (let i = 0; i < 1000; i++) {
      let row = [];

      for (let j = 0; j < 1000; j++) {
        row.push(false);
      }

      grid.push(row);
    }

    this.lights = grid;
    return this.lights;
  }

  execute(from: number[], to: number[], action: "on" | "off" | "toggle") {
    for (let i = from[0]; i <= to[0]; i++) {
      for (let j = from[1]; j <= to[1]; j++) {
        switch (action) {
          case "toggle":
            this.lights[i][j] = !this.lights[i][j];
            continue;
          case "on":
            this.lights[i][j] = true;
            continue;
          case "off":
            this.lights[i][j] = false;
            continue;
        }
      }
    }

    return this.lights;
  }

  countTrueValues() {
    let count = 0;

    for (let i = 0; i < this.lights.length; i++) {
      for (let j = 0; j < this.lights[i].length; j++) {
        if (this.lights[i][j] === true) {
          count++;
        }
      }
    }

    console.log("Count: ", count);

    return count;
  }
}
