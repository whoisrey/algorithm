import { expect } from "chai";
import { Node, reverseLinkedList } from "../lib/reverseLinkedList";

describe("reverseLinkedList", function () {
  let node;
  let reverseNode;

  it("When there is a single node in the linked list", function () {
    node = Node(5);
    reverseNode = reverseLinkedList(node);

    expect(reverseNode.value).to.eql(5);
    expect(reverseNode.next).to.eql(null);
  });

  it("When there are two nodes in the linked list", function () {
    node = Node(5);
    node.next = Node(3);
    node.next.next = Node(0);
    reverseNode = reverseLinkedList(node);

    expect(reverseNode.value).to.eql(0);
    expect(reverseNode.next.value).to.eql(3);
    expect(reverseNode.next.next.value).to.eql(5);
    expect(reverseNode.next.next.next).to.eql(null);
  });

  it("When there are four nodes in the linked list", function () {
    node = Node(5);
    node.next = Node(1);
    node.next.next = Node("e");
    node.next.next.next = Node(2);
    node.next.next.next.next = Node(3);
    reverseNode = reverseLinkedList(node);

    expect(reverseNode.value).to.equal(3);
    expect(reverseNode.next.value).to.equal(2);
    expect(reverseNode.next.next.value).to.equal("e");
    expect(reverseNode.next.next.next.value).to.equal(1);
    expect(reverseNode.next.next.next.next.value).to.equal(5);
    expect(reverseNode.next.next.next.next.next).to.eql(null);
  });

  it("When there are five nodes in the linked list", function () {
    node = Node(0);
    node.next = Node(1);
    node.next.next = Node("e");
    node.next.next.next = Node(2);
    node.next.next.next.next = Node(3);
    node.next.next.next.next.next = Node("K");
    reverseNode = reverseLinkedList(node);

    expect(reverseNode.value).to.equal("K");
    expect(reverseNode.next.value).to.equal(3);
    expect(reverseNode.next.next.value).to.equal(2);
    expect(reverseNode.next.next.next.value).to.equal("e");
    expect(reverseNode.next.next.next.next.value).to.equal(1);
    expect(reverseNode.next.next.next.next.next.value).to.eql(0);
    expect(reverseNode.next.next.next.next.next.next).to.eql(null);
  });

  it("Throw error when root node doesn't exist", function () {
    node = null;

    expect(() => reverseLinkedList(node)).throw();
  });
});
