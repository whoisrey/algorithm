/*

  문제 설명은 README를 참고하세요.

 */

export default function multiFactorial(m_factorial) {
  let string = "";
  let exclamationCount = 0;

  for (const char of m_factorial) {
    if (char === "!") {
      exclamationCount++;
    } else {
      string += char;
    }
  }

  let number = Number(string);
  let result = 1;

  while (number > 0) {
    result *= number;
    number -= exclamationCount;
  }

  return result;
}
