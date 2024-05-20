/**
 * Write a function that reverses the order of a singly-linked list in place.
 *
 * So a list like this:
 *   A -> B -> C -> null
 * Should be transformed into a list like this:
 *   C -> B -> A -> null
 *
 * Example:
 *
 * var root = Node('A');
 * var nodeB = root.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * // The list looks like this: A -> B -> C -> null
 *
 * var newRoot = reverseLinkedList(root);
 * // The list now looks like this: C -> B -> A -> null
 * newRoot.value // => 'C'
 * newRoot.next  // => nodeB
 * root.next     // => null (the old root is now the terminal node)
 *
 * (You can assume that the list ends without a cycle.)
 */

export const Node = (value) => ({ value: value, next: null });

export const reverseLinkedList = (node) => {
  if (!node) throw new TypeError("Root node doesn't exist.");

  const storage = {};
  let nextPointer;
  let result = null;

  while (node) {
    storage[node.value] = Node(node.value);
    storage[node.value].next = result;
    result = storage[node.value];
    nextPointer = node.next;
    node = nextPointer;
  }

  return result;
};
