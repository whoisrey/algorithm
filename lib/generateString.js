/*
 *
 * Write a function solution that,
 * given two integers N and K,
 * returns a string containing exactly N letters of 'a' and exactly K letters of 'b'
 * with no 3 consecutive letters being the same
 * (in other words, neither "aaa" nor "bbb" may occur in the returned string).
 *
 * 1. Given A = 5 and B = 3, your function may return "aabaabab".
 *    Note that "abaabbaa" would ALSO be a correct answer.
 *    Your function may return ANY correct answer.
 * 2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb"
 *    or any of several other strings.
 * 3. Given A = 1 and B = 4, your function should return "bbabb",
 *    which is the only correct answer in this case.
 *
 * Assume that:
 * - A and B are integers within the range [0..100];
 * - at least one solution exists for the given A and B.
 *
 * In your solution, focus on correctness.
 * The performance of your solution will not be the focus of the assessment.
 *
 */

export default function generateString(N, K) {
  let aCount = N;
  let bCount = K;
  let result = "";

  while (aCount > 0 || bCount > 0) {
    const resultLength = result.length;

    if (
      resultLength > 1 &&
      result[resultLength - 1] === result[resultLength - 2]
    ) {
      if (result[resultLength - 1] === "a") {
        result += "b";
        bCount--;
      } else {
        result += "a";
        aCount--;
      }
    } else {
      if (aCount >= bCount) {
        result += "a";
        aCount--;
      } else {
        result += "b";
        bCount--;
      }
    }
  }

  return result;
}
