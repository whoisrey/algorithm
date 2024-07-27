/**
 * Write a function that, given a string, finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 */

export default function longestRun(string) {
  // TOD: Your code here!
  const obj = {};
  const array = [];
  let str = "";
  let theLongestString = "";

  const makeObjectToGetData = (string) => {
    for (const char of string) {
      obj[char] = 1;
    }
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        obj[string[i]]++;
      }
    }
  };

  const makeArrayToCount = (obj) => {
    for (const char in obj) {
      array.push(obj[char]);
    }
  };

  const makeTheLongestString = (obj) => {
    const maxCount = Math.max(...array);
    for (const char in obj) {
      if (obj[char] === maxCount) {
        str = char;
        break;
      }
    }
    for (let i = 0; i < obj[str]; i++) {
      theLongestString += str;
    }
  };

  makeObjectToGetData(string);
  makeArrayToCount(obj);
  makeTheLongestString(obj);

  const startIndex = string.indexOf(theLongestString);
  const lastIndex =
    theLongestString.length + string.indexOf(theLongestString) - 1;
  return [startIndex, lastIndex];
}
