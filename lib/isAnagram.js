/**
 * Modify the String prototype to add a new method `isAnagram`.
 * `isAnagram` takes a single string argument. It returns true if that string
 * is an anagram of the string it was called on, and false otherwise.
 *
 * Example:
 *  ("roasting").isAnagram("organist"); // true
 *  ("presence").isAnagram("presents"); // false
 *
 * Anagrams should ignore spaces, punctuation, and capitalization:
 *  ("Quid est veritas?").isAnagram("Est vir qui adest."); // true
 *
 * Extra credit: It is bad practice to extend a native prototype with enumerable
 * properties. Make your isAnagram method non-enumerable.
 *
 * Extra extra credit: What is the complexity of your method in time?
 * There is an algorithm that uses O(n) time.
 *
 */

String.prototype.isAnagram = function (string) {
  function createPureString(string) {
    const convertedStr = string.toLowerCase();
    let pureString = "";

    for (const char of convertedStr) {
      if (typeof char === "string" && "a" <= char && char <= "z") {
        pureString += char;
      }
    }

    return pureString;
  }

  const originalString = createPureString(this);
  const stringToCompare = createPureString(string);

  if (originalString.length !== stringToCompare.length) {
    return false;
  }

  const storageToCountChar = {};

  for (const char of originalString) {
    if (storageToCountChar[char]) {
      storageToCountChar[char]++;
    } else {
      storageToCountChar[char] = 1;
    }
  }

  for (const char of stringToCompare) {
    if (!storageToCountChar[char]) {
      return false;
    }
  }

  return true;
};

Object.defineProperty(String.prototype, "isAnagram", {
  enumerable: false,
});
