/*

  문제 설명은 README를 참고하세요.

 */

export default function stringCycle(s) {
  let index = 0;
  let str = "";

  while (str.length !== s.length) {
    str += s[index];
    if (s.split(str).join("") !== "") {
      index++;
    } else {
      return str.length;
    }
  }

  return s.length;
}
