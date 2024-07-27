import { expect } from "chai";
import shortestGamePath from "../lib/shortestGamePath/shortestGamePath";

describe("Shortest Game Path", function () {
  it("should pass base cases", function () {
    expect(
      shortestGamePath([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1],
      ])
    ).to.eql(11);
    expect(
      shortestGamePath([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1],
      ])
    ).to.eql(-1);
  });
});
