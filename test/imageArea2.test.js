import { expect } from "chai";
import imageArea2 from "../lib/imageArea2/imageArea2";

describe("Image Area 2", function () {
  it("should pass base cases", function () {
    expect(
      imageArea2([
        [1, 1, 0, 1, 1],
        [0, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 0],
      ])
    ).to.eql([4, 2]);
    expect(
      imageArea2([
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [1, 0, 1, 1],
        [1, 0, 0, 0],
      ])
    ).to.eql([3, 2]);
  });
});
