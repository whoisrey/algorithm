import { expect } from "chai";
import mathExpression from "../lib/mathExpression";

describe("Math Expression", function () {
  it("should pass base cases", function () {
    expect(mathExpression("2-1x5-4x3+2")).to.eql(11);
    expect(mathExpression("2x3-1")).to.eql(5);
  });
});
