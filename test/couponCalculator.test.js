import { expect } from "chai";
import couponCalculator from "../lib/couponCalculator";

describe("Coupon Calculator", function () {
  it("should pass base cases", function () {
    expect(couponCalculator(["A B C D", "A D", "A B D", "B D"], 2)).to.eql(7);
    expect(
      couponCalculator(
        [
          "JAY",
          "JAY ELLE JAY MAY",
          "MAY ELLE MAY",
          "ELLE MAY",
          "ELLE ELLE ELLE",
          "MAY",
        ],
        3
      )
    ).to.eql(8);
  });
});
