/*
 *
 * A string S consisting only of letters "A", "B" and "C" is given.
 *
 * This string can be transformed according to one of the following rules:
 *
 * 1. substitute some occurrence of "AB" with "AA",
 * 2. substitute some occurrence of "BA" with "AA",
 * 3. substitute some occurrence of "CB" with "CC",
 * 4. substitute some occurrence of "BC" with "CC",
 * 5. substitute some occurrence of "AA" with "A",
 * 6. substitute some occurrence of "CC" with "C".
 *
 * As long as it is possible to transform the string,
 * a rule is picked at RANDOM and the string is transformed according to that rule.
 *
 * Write a function that, given a string S consisting of N characters,
 * returns any string that can result from a sequence of transformations as described above.
 *
 * < Example >
 *
 * transformString("AABBCC");  //  "AC"
 *
 * because this is one of the possible sequences of transformations:
 *
 * [step 1] "AABBCC" -> "AAABCC" (using rule 1)
 * [step 2] "AAABCC" -> "AABCC" (using rule 5)
 * [step 3] "AABCC" -> "AACCC" (using rule 4)
 * [step 4] "AACCC" -> "AACC" (using rule 6)
 * [step 5] "AACC" -> "ACC" (using rule 5)
 * [step 6] "ACC" -> "AC" (using rule 5)
 * [done] no further rule can be applied.
 *
 * Assume that,
 * the given string S consists ONLY of the following characters: "A", "B" and/or "C".
 *
 * Can you solve with the worst case time complexity of O(n)?
 *
 */

export default function transformString(str) {
  if (typeof str !== "string") return false;

  const changeString = (str, char, rechar) => {
    return str.replace(char, rechar);
  };

  while (
    str.includes("AB") ||
    str.includes("BA") ||
    str.includes("CB") ||
    str.includes("BC") ||
    str.includes("AA") ||
    str.includes("CC")
  ) {
    if (str.includes("AB")) {
      str = changeString(str, "AB", "AA");
    } else if (str.includes("BA")) {
      str = changeString(str, "BA", "AA");
    } else if (str.includes("CB")) {
      str = changeString(str, "CB", "CC");
    } else if (str.includes("BC")) {
      str = changeString(str, "BC", "CC");
    } else if (str.includes("AA")) {
      str = changeString(str, "AA", "A");
    } else if (str.includes("CC")) {
      str = changeString(str, "CC", "C");
    }
  }

  return str;
}
