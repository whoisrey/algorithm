import { expect } from "chai";
import creditCardNumber from "../lib/creditCardNumber/creditCardNumber";

describe("Credit Card Number", function () {
  it("should pass base cases", function () {
    expect(
      creditCardNumber([
        "3285-3764-9934-2453",
        "3285376499342453",
        "3285-3764-99342453",
        "328537649934245",
        "3285376499342459",
        "3285-3764-9934-2452",
      ])
    ).to.eql([1, 1, 0, 0, 0, 0]);
  });
});
