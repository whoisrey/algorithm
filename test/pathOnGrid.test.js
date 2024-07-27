import { expect } from "chai";
import pathOnGrid from "../lib/pathOnGrid/pathOnGrid";

describe("Path on Grid", function () {
  it("should pass base cases", function () {
    expect(pathOnGrid(2, 4)).to.eql(4);
    expect(pathOnGrid(3, 3)).to.eql(6);
  });
});
