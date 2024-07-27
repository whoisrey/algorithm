import { expect } from "chai";
import gameSkills from "../lib/gameSkills/gameSkills";

describe("Game Skills", function () {
  it("should pass base cases", function () {
    expect(
      gameSkills(
        [
          [50, 3],
          [100, 4],
          [200, 2],
          [600, 1],
        ],
        1024
      )
    ).to.eql([4, 5]);
    expect(
      gameSkills(
        [
          [100, 3],
          [70, 2],
          [200, 5],
        ],
        1000000
      )
    ).to.eql([-1]);
    expect(gameSkills([[250, 100]], 1001)).to.eql([1, 5]);
  });
});
