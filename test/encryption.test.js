import { expect } from "chai";
import encryption from "../lib/encryption";

describe("Encryption", function () {
  it("should pass base cases", function () {
    expect(encryption("hello", "cbvvu")).to.eql(true);
    expect(encryption("hello", "bbvmu")).to.eql(false);
    expect(encryption("world", "abcde")).to.eql(true);
  });
});
