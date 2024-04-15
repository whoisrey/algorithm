/*
 * Given two arrays of positive integers,
 * add their elements into a new array.
 * The solution should add both arrays,
 * one by one starting from the 0'th index,
 * and split the sum into individual digits if it is a 2–digit number.
 *
 * Input : [23, 5, 2, 7, 87], [4, 67, 2, 8]
 * Output: [2, 7, 7, 2, 4, 1, 5, 8, 7]
 *
 * Input : [], [4, 67, 2, 8]
 * Output: [4, 6, 7, 2, 8]
 *
 */

export default function addArrays(arrayA, arrayB) {
  const aLength = arrayA.length;
  const bLength = arrayB.length;
  const maxLength = Math.max(aLength, bLength);
  const answer = [];

  for (let i = 0; i < maxLength; i++) {
    if (arrayA[i] === undefined) {
      arrayA[i] = 0;
    } else if (arrayB[i] === undefined) {
      arrayB[i] = 0;
    }

    const element = arrayA[i] + arrayB[i];

    element.length !== 1
      ? answer.push(...String(element).split(""))
      : arr.push(element);
  }

  return answer.map((v) => Number(v));
}
