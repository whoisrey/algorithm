/*

  여러 수의 덧셈('+'), 뺄셈('-'), 곱셈('x')으로 이루어진 식에 괄호 한 쌍을 올바르게 삽입하여
  식을 계산한 결과가 최대가 되도록 하려 합니다.

  예를 들어, 2-1x5-4x3+2라는 식을 계산하면 -13입니다.
  여기에 괄호 한 쌍을 추가하여 2-1x(5-4)x3+2로 만든다면 계산 결과는 1이 됩니다.
  하지만 만약 2-(1x5-4x3)+2로 만든다면 계산 결과는 11이 되어 최대가 됩니다.

  덧셈, 뺄셈과 곱셈으로 이루어진 식 expression이 매개변수로 주어질 때,
  괄호 한 쌍을 올바르게 삽입하여 계산 한 결과의 최댓값을 return 하도록 함수를 완성해주세요.

  < 제한사항 >
  - 3 ≤ expression의 길이 ≤ 101
  - expression은 숫자와 문자 '+', '-', 'x'로 이루어진 문자열입니다.
  - expression의 각 항(연산자 사이의 숫자)은 0 이상 9 이하인 정수입니다.
  - 항상 올바른 식만 입력으로 주어집니다.
  - 정답 및 중간 계산 결과가 -1015 이상 1015 이하인 경우만 입력으로 주어집니다.

  < 입출력 예 #1 >
  expression: "2-1x5-4x3+2"
  result: 11

  < 입출력 예 #2 >
  expression: "2x3-1"
  result: 5

  "(2x3-1)"과 같이 괄호를 삽입하면 됩니다.

 */
export default function mathExpression(expression) {
  const storage = [];
  let num = "";

  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(Number(expression[i]))) {
      num += expression[i];
    } else {
      if (num !== "") {
        storage.push(Number(num));

        num = "";
      }

      storage.push(expression[i]);
    }
  }

  if (num !== "") {
    storage.push(Number(num));
  }
}
