import { expect } from "chai";
import postfixExpression from "../lib/postfixExpression/postfixExpression";

describe("Postfix Expression", function () {
  it("should pass base cases", function () {
    expect(
      postfixExpression(["12", "2", "5", "+", "*", "9", "3", "/", "-"])
    ).to.eql(81);
    expect(postfixExpression(["1", "1", "+", "1", "1", "+", "*"])).to.eql(4);
  });
});
