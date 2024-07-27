import { expect } from "chai";
import greatUncleKen from "../lib/greatUncleKen";

describe("Great Uncle Ken", function () {
  it("should pass base cases", function () {
    expect(
      greatUncleKen([
        [100, 3],
        [200, 1],
        [50, 2],
      ])
    ).to.eql(0);
    expect(
      greatUncleKen([
        [2500, 3],
        [700, 5],
      ])
    ).to.eql(400);
  });

  it("should pass reverse base cases", function () {
    expect(
      greatUncleKen([
        [50, 2],
        [200, 1],
        [100, 3],
      ])
    ).to.eql(0);
    expect(
      greatUncleKen([
        [700, 5],
        [2500, 3],
      ])
    ).to.eql(400);
  });
});
