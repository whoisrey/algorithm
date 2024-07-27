import { expect } from "chai";
import cafeOrders from "../lib/cafeOrders";

describe("Cafe Orders", function () {
  it("should pass base cases", function () {
    expect(
      cafeOrders(
        ["12:10", "12:20", "12:40", "12:40", "12:50", "13:00", "13:20"],
        20
      )
    ).to.eql(4);
  });
});
