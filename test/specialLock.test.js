import { expect } from "chai";
import specialLock from "../lib/specialLock";

describe("Special Lock", function () {
  it("should pass base cases", function () {
    expect(specialLock("82195", "64723")).to.eql(13);
    expect(specialLock("00000000000000000000", "91919191919191919191")).to.eql(
      20
    );
    expect(specialLock("24680", "13579")).to.eql(5);
  });

  it("if the initial dials and the password are same", function () {
    expect(specialLock("11111", "11111")).to.eql(0);
  });

  it("if the password length reaches the maximum limit", function () {
    expect(
      specialLock("0123456789".repeat(100), "9876543210".repeat(100))
    ).to.eql(2600);
  });
});
