import { expect } from "chai";
import imageAreaDetection from "../lib/imageAreaDetection";

describe("Image Area Detection", function () {
  it("should pass base cases", function () {
    expect(
      imageAreaDetection([
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
