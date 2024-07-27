/*
 *
 * Given an integer array, output the number of pairs that sum up to a specific value k.
 * Consider the fact that the same number can add up to k with its duplicates in the array.
 *
 * < Examples >
 *
 * f(10, [3, 4, 5, 6, 7])  // 2     Due to [6, 4], [7, 3]
 * f(8, [3, 4, 5, 4, 4])   // 4     Due to [3, 5], [4, 4], [4, 4], [4, 4]
 *
 */

export default function arrayPairSum(k, array) {
  // your code..
  const container = [];
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const elementArray = [array[i], array[j]];
      container.push(elementArray);
    }
  }
  for (const arr of container) {
    if (arr[0] + arr[1] === k) answer.push(arr);
  }
  return answer.length;
}
