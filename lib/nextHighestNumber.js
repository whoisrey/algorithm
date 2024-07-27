/*
 *
 * Given a number, find the next higher number using only the digits in the given number.
 *
 * < Examples >
 *
 * f(1234)  // 1243
 *
 */

export default function nextHighestNumber(number) {
  const digits = number.toString().split("");
  let pivot = digits.length - 2;

  while (pivot >= 0 && digits[pivot] >= digits[pivot + 1]) {
    pivot--;
  }

  if (pivot < 0) {
    return number;
  }

  let successor = digits.length - 1;
  while (digits[successor] <= digits[pivot]) {
    successor--;
  }

  [digits[pivot], digits[successor]] = [digits[successor], digits[pivot]];

  let left = pivot + 1;
  let right = digits.length - 1;

  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  return parseInt(digits.join(""));
}
