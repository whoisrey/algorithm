import { expect } from "chai";
import infiniteMatchingString from "../lib/infiniteMatchingString/infiniteMatchingString";

describe("Infinite Matching String", function () {
  it("should pass base cases", function () {
    expect(infiniteMatchingString("ABC", "BCA")).to.eql(false);
    expect(infiniteMatchingString("AB", "ABAB")).to.eql(true);
    expect(infiniteMatchingString("A", "AA")).to.eql(true);
  });

  it("should pass when arguments which have max length are given", function () {
    expect(infiniteMatchingString("A".repeat(5000), "A".repeat(10000))).to.eql(
      true
    );
    expect(infiniteMatchingString("A".repeat(5000), "B".repeat(10000))).to.eql(
      false
    );
  });
});
