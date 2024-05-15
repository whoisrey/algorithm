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
