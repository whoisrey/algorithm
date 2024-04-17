/**
 * Given an arbitrary input string, return the first non-repeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AABCABD'); // => 'C'
 */

export default function firstNonRepeatedCharacter(str) {
  const arr = [...str];
  const obj = {};
  const answer = [];

  for (const i of arr) {
    let num = 0;

    for (const j of str) {
      if (i === j) {
        num += 1;
        obj[j] = num;
      }
    }

    for (const i in obj) {
      if (obj[i] === 1) {
        answer.push(i);
      }
    }
  }

  return answer[0];
}
