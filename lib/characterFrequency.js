/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Gotcha ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *
 */

export default function characterFrequency(string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let str = "";
  for (const i of alphabet) {
    for (const j of string) {
      if (i === j) {
        str += i;
      }
    }
  }

  let equal = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      equal += str[i];
    }
  }

  const obj = {};
  for (const i of equal) {
    let num = 0;
    for (const j of str) {
      if (i === j) {
        num++;
        obj[i] = num;
      }
    }
    num = 0;
  }

  const answer = [];
  for (const i in obj) {
    const array = [];
    array.push(i);
    array.push(obj[i]);
    answer.push(array);
  }

  return answer.sort((a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    return 0;
  });
}
