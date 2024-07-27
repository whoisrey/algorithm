import { expect } from "chai";
import seatFinder from "../lib/seatFinder";

describe("seatFinder", function () {
  it("should pass base cases", function () {
    expect(seatFinder(2, "1A 2F 1C")).to.eql(2);
    expect(seatFinder(1, "1A 1D 1H")).to.eql(0);
    expect(seatFinder(1, "")).to.eql(2);
    expect(seatFinder(2, "")).to.eql(4);
  });
});
