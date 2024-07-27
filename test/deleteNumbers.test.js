import { expect } from "chai";
import deleteNumbers from "../lib/deleteNumbers/deleteNumbers";

describe("Delete Numbers", function () {
  it("should pass base cases", function () {
    expect(
      deleteNumbers(3, [
        [3, 5, 6],
        [9, 2, 7],
        [4, 1, 8],
      ])
    ).to.eql(22);
    expect(
      deleteNumbers(2, [
        [2, 3],
        [4, 1],
      ])
    ).to.eql(11);
    expect(
      deleteNumbers(4, [
        [11, 9, 8, 12],
        [2, 15, 4, 14],
        [1, 10, 16, 3],
        [13, 7, 5, 6],
      ])
    ).to.eql(46);
  });
});
