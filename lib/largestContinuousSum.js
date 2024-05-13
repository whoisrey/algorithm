/*
 *
 * Given an array of integers (positive and negative) find the largest continuous sum.
 *
 * < Examples >
 *
 * f([ 1, 3, -10, 2, 7 ])  // 9  (from 2 to 7)
 *
 */

export default function findLargestContinuousSum(array) {
  const cache = [];

  function saveResultsOfSum(index) {
    let sum = 0;

    for (let i = index; i < array.length; i++) {
      if (typeof array[i] === "number") {
        sum += array[i];
        cache.push(sum);
      } else {
        break;
      }
    }
  }

  for (let index = 0; index < array.length; index++) {
    saveResultsOfSum(index);
  }

  return Math.max(...cache);
}
