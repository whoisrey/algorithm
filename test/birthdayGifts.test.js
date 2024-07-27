import { expect } from "chai";
import birthdayGifts from "../lib/birthdayGifts";

describe("Calculate the number of birthday gifts", function () {
  it("should pass base cases", function () {
    expect(birthdayGifts(["0107", "0110", "0201"])).to.eql(3);
    expect(birthdayGifts(["0315", "0301", "0625", "1230", "0309", "1116", "1216", "0128", "0621", "0510"])).to.eql(53);
    expect(birthdayGifts(["0106", "0110", "0111"])).to.eql(2);
  });
});
