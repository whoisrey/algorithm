import { expect } from "chai";
import calculateSpeedLimit from "../lib/speedLimit/speedLimit";

describe("Speed Liimt", function () {
  it("should pass base cases", function () {
    expect(
      calculateSpeedLimit(60, [
        [60, 1],
        [130, 2],
        [240, 4],
        [432, 7],
      ])
    ).to.eql(2);
    expect(
      calculateSpeedLimit(30, [
        [60, 3],
        [152, 6],
        [240, 9],
      ])
    ).to.eql(1);
  });
});
