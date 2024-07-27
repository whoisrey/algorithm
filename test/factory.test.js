import { expect } from "chai";
import factory from "../lib/factory/factory";

describe.only("Factory", function () {
  it("should pass base cases", function () {
    expect(
      factory(
        [
          [1, 0, 0],
          [1, 1, 0],
          [1, 1, 0],
          [1, 0, 1],
          [1, 1, 0],
          [0, 1, 1],
        ],
        2
      )
    ).to.eql(4);
  });
});
