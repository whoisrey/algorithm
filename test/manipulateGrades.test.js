import { expect } from "chai";
import manipulateGrades from "../lib/manipulateGrades";

describe("Manipulate Grades", function () {
  it("should pass base cases", function () {
    expect(manipulateGrades([2, 1, 3])).to.eql(1);
    expect(manipulateGrades([1, 2, 3])).to.eql(0);
    expect(manipulateGrades([3, 2, 3, 6, 4, 5])).to.eql(3);
  });
});
