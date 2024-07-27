import { expect } from "chai";
import bombs from "../lib/bomb";

describe("Bombs", function () {
  it("should pass base cases", function () {
    expect(bombs([3, 1, 2, 4])).to.eql(4);
    expect(bombs([2, 2, 2, 2])).to.eql(2);
  });

  it("when there is only one bomb", function () {
    expect(bombs([5])).to.eql(1);
  });

  it("whene there are no bombs", function () {
    expect(bombs([])).to.eql(0);
  });
});
