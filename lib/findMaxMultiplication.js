/*

  어떤 수의 0이 아닌 각 자릿수를 모두 곱한 값을 자릿수 곱이라고 합니다.
  자릿수 곱은 주어진 수를 몇 진수로 나타내느냐에 따라 달라질 수가 있습니다.
  예를 들어, 10진수 10을 3진수로 나타내면 101이며, 자릿수 곱은 1입니다.
  그리고 4진수로 나타내면 22이며, 자릿수 곱은 4입니다.
  10진수 N을 k(1 < k < 10) 진법으로 나타내려고 할 때,
  자릿수 곱이 최대가 되는 k와 그때의 자릿수 곱을 구해주세요.
  만약 자릿수 곱이 최대가 되는 k가 여러 개 있다면 그중 가장 큰 k를 구해주세요.

  예를 들어 N = 10일 때, 4진수로 나타내면 22이고, 0이 아닌 자릿수들의 곱은 4입니다.
  또한, 6진수로 나타내면 14이고, 0이 아닌 자릿수들의 곱은 4입니다.
  두 경우 모두 진법 자릿수 곱이 최대가 되는데 둘 중 k가 더 큰 경우는 6진수로 나타낼 때입니다.

  10진수 N이 매개변수로 주어질 때, 자릿수 곱이 최대가 되는 k 진법과 그때의 자릿수 곱을 return 하는 함수를 완성해주세요.

  < 제한사항 >
  - N은 10 이상 1,000,000 이하의 정수입니다.
  - return하는 배열은 [자릿수 곱이 최대가 되는 k 진법, 그때의 자릿수 곱] 순서여야 합니다.

  < 입출력 예시 #1 >

  N: 10
  result: [6,4]

  < 입출력 예시 #2 >
  N: 14
  result: [5,8]

  10진수 14를 5진수로 나타내면 24이고, 0이 아닌 자릿수들의 곱은 8이며, 이때가 최대입니다.

 */

export default function findMaxMultiplication(N) {
  let bestProduct = 0;
  let bestBase = 0;

  for (let base = 2; base < 10; base++) {
    const baseStr = N.toString(base);
    let product = 1;

    for (const i of baseStr) {
      if (i) product *= i;
    }

    if (product > bestProduct || (product === bestProduct && base > bestBase)) {
      bestProduct = product;
      bestBase = base;
    }
  }

  return [bestBase, bestProduct];
}
