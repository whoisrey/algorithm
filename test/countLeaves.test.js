import { expect } from "chai";
import { Tree } from "../lib/countLeaves";

describe("Count tree leaves", function () {
  let root;

  beforeEach(function () {
    root = new Tree();
  });

  it("Root의 Leaf Node의 갯수를 구해야 한다", function () {
    expect(root.countLeaves()).to.eql(1);
  });

  it("Leaf Node의 개수를 구해야 한다", function () {
    root.addChild(new Tree());
    expect(root.countLeaves()).to.eql(1);
    root.addChild(new Tree());
    expect(root.countLeaves()).to.eql(2);
    root.removeChild(root.children[0]);
    expect(root.countLeaves()).to.eql(1);
  });

  it("Leaf Node counting test - 3 depth", function () {
    root.addChild(new Tree());
    root.addChild(new Tree());
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[1].addChild(new Tree());
    expect(root.countLeaves()).to.eql(5);
  });

  it("Leaf Node counting test - 4 depth", function () {
    root.addChild(new Tree());
    root.addChild(new Tree());
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[1].addChild(new Tree());
    root.children[2].addChild(new Tree());
    root.children[2].addChild(new Tree());
    root.children[0].children[0].addChild(new Tree());
    root.children[0].children[0].addChild(new Tree());
    expect(root.countLeaves()).to.eql(7);
  });

  it("If only one node has a single child node regardless of the depth", function () {
    root.addChild(new Tree());
    root.children[0].addChild(new Tree());
    root.children[0].children[0].addChild(new Tree());
    expect(root.countLeaves()).to.eql(1);
  });
});
