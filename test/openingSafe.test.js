import { expect } from "chai";
import openingSafe from "../lib/openingSafe/openingSafe";

describe("Opening Safe", function () {
  it("should pass base cases", function () {
    expect(openingSafe([1, 5, 9, 3, 7], [2, 5, 9, 3, 7])).to.eql(2);
    expect(
      openingSafe([0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 2, 3, 4, 5, 6, 7, 8, 9])
    ).to.eql(9);
    expect(openingSafe([9, 0, 0, 0, 0], [9, 9, 1, 9, 1])).to.eql(7);
  });
});
