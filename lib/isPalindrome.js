/*
 *
 * Given an integer x, return `true` if x is a palindrome, and `false` otherwise.
 *
 * < Example 1 >
 * Input: 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * < Example 2 >
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
 * Therefore it is NOT a palindrome.
 *
 * < Example 3 >
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is NOT a palindrome.
 *
 */
export default function isPalindrome(x) {
  const str = x.toString();
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return x < 0 ? false : str === reverse;
}
