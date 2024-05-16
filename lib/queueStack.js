/**
 * Implement a queue using two stacks.
 */

/**
 * Stack Class (You can use array in your logic)
 */
export const Stack = function () {
  const array = [];
  let index = 0;

  this.push = (value) => {
    if (array[index]) {
      index++;
    }

    array[index] = value;
  };

  this.pop = () => {
    const removedElement = array[array.length - 1];

    array.length--;

    return removedElement;
  };

  this.size = () => array.length;
};

/**
 * Queue Class
 */
export const Queue = function () {
  const inbox = new Stack();
  const outbox = new Stack();

  this.enqueue = (value) => {
    inbox.push(value);
  };

  this.dequeue = () => {
    if (outbox.size() === 0) {
      while (inbox.size() !== 0) {
        outbox.push(inbox.pop());
      }
    }

    return outbox.pop();
  };

  this.size = () => inbox.size() + outbox.size();
};
