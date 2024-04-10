import Wardrobe from "./wardrobe";

describe("Wardrobe test suite...", () => {
  test("Initialize the wardrobe elements", () => {
    const wardrobeElements = new Wardrobe();

    const response = wardrobeElements.getElements();

    expect(response).toMatchObject([50, 75, 100, 120]);
  });
});
