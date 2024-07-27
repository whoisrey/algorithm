import { expect } from "chai";
import unluckyNumber from "../lib/unluckyNumber";

describe("Unlucky Number", function () {
  it("should pass base cases", function () {
    expect(unluckyNumber(1)).to.eql(4);
    expect(unluckyNumber(2)).to.eql(13);
    expect(unluckyNumber(3)).to.eql(44);
  });
});
