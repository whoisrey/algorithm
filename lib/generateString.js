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
