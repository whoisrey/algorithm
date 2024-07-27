import { expect } from "chai";
import multiFactorial from "../lib/multiFactorial/multiFactorial";

describe("Multi Factorial", function () {
  it("should pass base cases", function () {
    expect(multiFactorial("5!")).to.eql(120);
    expect(multiFactorial("20!!!")).to.eql(4188800);
    expect(multiFactorial("20!!!!")).to.eql(122880);
  });
});
