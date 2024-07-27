import { expect } from "chai";
import mostComplicatedOrder from "../lib/mostComplicatedOrder";

describe("Most Complicated Order", function () {
  it("should pass base cases", function () {
    expect(
      mostComplicatedOrder([
        "alex pizza pasta",
        "alex pizza pizza",
        "alex noodle",
        "bob pasta",
        "bob noodle sandwich pasta",
        "bob steak noodle",
      ])
    ).to.eql(["bob"]);
    expect(
      mostComplicatedOrder([
        "alex pizza pasta steak",
        "bob noodle sandwich pasta",
        "choi pizza sandwich pizza",
        "alex pizza pasta steak",
      ])
    ).to.eql(["alex", "bob"]);
  });
});
