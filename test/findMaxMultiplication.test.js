import { expect } from "chai";
import findMaxMultiplication from "../lib/findMaxMultiplication";

describe("Find Maximum Multiplication", function () {
  it("should pass base cases", function () {
    expect(findMaxMultiplication(10)).to.eql([6, 4]);
    expect(findMaxMultiplication(14)).to.eql([5, 8]);
  });
});
