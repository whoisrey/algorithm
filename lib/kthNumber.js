/*

  자연수 A, B (1 ≤ A < B ≤ 1,000,000)가 주어졌을때
  A의 배수 집합과 B의 배수 집합의 합집합의 원소들을 오름차순으로 나열한 수열을 S라 하자

  (S는 당연하게도 무한수열이며 합집합에서 만들어졌으므로 중복된 공배수 역시 수열에 한 번만 나온다.
   예를 들어 A가 6이고 B가 8인 경우 S: 6, 8, 12, 16, 18, 24, 30, 32, ... (공배수인 24도 한번만 나온다)
   와 같이 생겼다.)

  이러한 수열 S의 K (1 ≤ K ≤ 1,000,000)번째 원소를 구하라.

  ##### 입출력 예시

  A: 6,  B: 8, K: 8 => 32

 */

export default function kthNumber(A, B, K) {
  let result = [];
  let multipleA = A;
  let multipleB = B;
  let lastAdded = 0;

  while (result.length < K) {
    if (multipleA < multipleB) {
      if (multipleA !== lastAdded) {
        result.push(multipleA);
        lastAdded = multipleA;
      }
      multipleA += A;
    } else {
      if (multipleB !== lastAdded) {
        result.push(multipleB);
        lastAdded = multipleB;
      }
      multipleB += B;
    }
  }

  return result[K - 1];
}
