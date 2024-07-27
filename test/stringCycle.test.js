import { expect } from "chai";
import stringCycle from "../lib/stringCycle/stringCycle";

describe("String Cycle", function () {
  it("should pass base cases", function () {
    expect(stringCycle("abababab")).to.eql(2);
    expect(stringCycle("abcabcabd")).to.eql(9);
  });
});
