import { expect } from "chai";
import wrapProducts from "../lib/wrapProducts";

describe("Wrap Products", function () {
  it("should pass base cases", function () {
    expect(wrapProducts([5, 3, 7], [3, 7, 6])).to.eql(3);
    expect(wrapProducts([1, 2], [2, 3, 1])).to.eql(2);
    expect(wrapProducts([3, 8, 6], [5, 6, 4])).to.eql(2);
  });
});
