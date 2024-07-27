import { expect } from "chai";
import connectingLetters from "../lib/connectingLetters";

describe("Connecting letters", function () {
  it("should pass base cases", function () {
    expect(
      connectingLetters([
        ["A", "B", "T", "T", "T"],
        ["T", "C", "D", "E", "T"],
        ["T", "T", "T", "F", "T"],
        ["B", "A", "H", "G", "F"],
        ["C", "D", "E", "F", "G"],
      ])
    ).to.eql(15);
  });
});
