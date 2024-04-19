/*
 *
 * Write a function that accepts an array of random integers and an integer n.
 * Determine the number of times where two integers in the array have the difference of n.
 *
 * < Examples >
 *
 * f(4, [1, 5, 6, 9, 16, 27]) // 2   (Due to [1, 5], and [5, 9])
 * f(2, [1, 3, 5, 4])         // 2   (Due to [1, 3], [3, 5])
 *
 */

export default function integerDifference(n, array) {
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const absValue = Math.abs(array[i] - array[j]);

      if (absValue === n) count++;
    }
  }

  return count;
}
