import { expect } from "chai";
import getPermutations from "../lib/stringPermutation";

describe("String Permutations", function () {
  it("should return all possible combinations", function () {
    expect(getPermutations("abc")).to.eql([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);

    expect(getPermutations("ABSG")).to.eql([
      "ABGS",
      "ABSG",
      "AGBS",
      "AGSB",
      "ASBG",
      "ASGB",
      "BAGS",
      "BASG",
      "BGAS",
      "BGSA",
      "BSAG",
      "BSGA",
      "GABS",
      "GASB",
      "GBAS",
      "GBSA",
      "GSAB",
      "GSBA",
      "SABG",
      "SAGB",
      "SBAG",
      "SBGA",
      "SGAB",
      "SGBA",
    ]);
  });

  it("when the given string is a single-character string", function () {
    expect(getPermutations("A")).to.eql(["A"]);
  });

  it("when duplicate strings are provided", function () {
    expect(getPermutations("ABB")).to.eql(["ABB, BAB, BBA"]);
  });
});
