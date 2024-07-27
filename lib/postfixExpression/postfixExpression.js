/*

  문제 설명은 README를 참고하세요.

 */

export default function postfixExpression(P) {
  const result = [];

  for (let i = 0; i < P.length; i++) {
    switch (P[i]) {
      case "+":
        result.push(Number(P[i - 2]) + Number(P[i - 1]));
        break;
      case "-":
        result.push(Number(P[i - 2]) + Number(P[i - 1]));
        break;
      case "*":
        result.push(Number(P[i - 2]) + Number(P[i - 1]));
        break;
      case "-":
        result.push(Number(P[i - 2]) + Number(P[i - 1]));
        break;
      default:
        result.push(Number(P[i - 2]));
    }
  }
}
