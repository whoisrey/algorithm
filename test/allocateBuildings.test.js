import { expect } from "chai";
import allocateBuildings from "../lib/allocateBuildings/allocateBuildings";

describe("Allocate Buildings", function () {
  it("should pass base cases", function () {
    expect(
      allocateBuildings(2, 3, [
        [1, 1],
        [1, 2],
        [2, 3],
      ])
    ).to.eql(7);
    expect(
      allocateBuildings(5, 5, [
        [3, 1],
        [2, 5],
        [3, 2],
        [1, 2],
        [1, 2],
        [4, 3],
      ])
    ).to.eql(19);
  });
});
