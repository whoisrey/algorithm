/**
 * Implement a queue using two stacks.
 */

/**
 * Stack Class (You can use array in your logic)
 */
export const Stack = function () {
  const array = [];
  let index = 0;

  this.push = function (value) {
    if (array[index]) {
      index++;
    }

    array[index] = value;
  };

  this.pop = function () {
    const removedElement = array[array.length - 1];

    array.length--;

    return removedElement;
  };

  this.size = function () {
    return array.length;
  };
};

/**
 * Queue Class
 */
export const Queue = function () {
  const inbox = new Stack();
  const outbox = new Stack();

  this.enqueue = function (value) {
    inbox.push(value);
  };

  this.dequeue = function () {
    if (outbox.size() === 0) {
      while (inbox.size() !== 0) {
        outbox.push(inbox.pop());
      }
    }

    return outbox.pop();
  };

  this.size = function () {
    return inbox.size() + outbox.size();
  };
};
