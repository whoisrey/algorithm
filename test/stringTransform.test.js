import { expect } from "chai";
import transformString from "../lib/stringTransform";

describe("String Transformation", function () {
  it("should return a possible transformation of the given string.", function () {
    expect(transformString("AABBCC")).to.eql("AC");
    expect(transformString("ABAACBCCABABACBCCABAA")).to.eql("ACACA");
    expect(transformString("AAAAAAA")).to.eql("A");
    expect(transformString("BBBBBBB")).to.eql("BBBBBBB");
    expect(transformString("CCCCCCC")).to.eql("C");
    expect(transformString("BA")).to.eql("A");
    expect(transformString("BC")).to.eql("C");
  });

  it("should not affect the return value if there is the presence of characters other than A, B and C.", function () {
    expect(transformString("VACO")).to.eql("VACO");
    expect(transformString("BACO")).to.eql("ACO");
  });

  it("when a primitive value other than a string is provided", function () {
    expect(transformString(5)).to.eql(false);
    expect(transformString([1, 2, 3])).to.eql(false);
    expect(transformString({ name: "ken" })).to.eql(false);
    expect(transformString(false)).to.eql(false);
  });
});
