/*
 *
 * Given two arrays,
 * Second array is missing one element from the first array.
 * Find the missing element.
 *
 * Elements are always non-negative numbers
 * Duplicate elements are allowed
 *
 * findMissingElement([4,1,0,2,9,6,8,7,5,3], [6,4,7,2,1,0,8,3,9]); // 5
 *
 * Try to achieve the BEST time complexity.
 *
 */

export default function findMissingElement(arr1, arr2) {
  // Your code..
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
  }

  return sum1 - sum2;
}
