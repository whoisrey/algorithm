import { expect } from "chai";
import imageArea from "../lib/imageArea/imageArea";

describe("Image Area", function () {
  it("should pass base cases", function () {
    expect(
      imageArea([
        [1, 1, 0, 1, 1],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 1, 1],
      ])
    ).to.eql([4, 8]);
  });
});
