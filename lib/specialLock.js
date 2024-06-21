/*

  잠겨 있는 다이얼 자물쇠가 있습니다.
  이 자물쇠를 풀기 위해서는 비밀번호를 눈금선에 맞추어야 합니다.
  현재 눈금선에 맞추어져 있는 수의 각 자리를 정방향,
  또는 역방향으로 회전하여 비밀번호의 수와 맞출 수 있습니다.
  이 때, 자물쇠를 풀기 위해 회전시키는 횟수의 최솟값을 구하려고 합니다.
  예를 들어, 현재 눈금선의 숫자는 "82195" 이고, 비밀번호가 "64723" 이라면 다음과 같은 연산을 거쳐 자물쇠를 풀 수 있습니다.

  1번째 비밀번호 : 8→ 7→ 6 (역방향 2회)
  2번째 비밀번호 : 2→ 3→ 4 (정방향 2회)
  3번째 비밀번호 : 1→ 0→ 9→ 8→ 7 (역방향 4회)
  4번째 비밀번호 : 9→ 0→ 1→ 2 (정방향 3회)
  5번째 비밀번호 : 5→ 4→ 3 (역방향 2회)

  총 횟수 : 13회

  물론 이 방법 이외에도 다른 방법으로 회전시켜 자물쇠를 풀 수 있지만,
  해당 방법보다 더 작은 횟수로 자물쇠를 푸는 방법은 없습니다. 따라서 최솟값은 13이 됩니다.
  현재 눈금선에 있는 숫자 P와, 비밀번호 S가 매개변수로 주어질 때,
  자물쇠를 풀기 위한 최소 회전 횟수를 return 하는 함수를 완성해 주세요.

  < 제한사항 >
  - 비밀번호의 길이 : 1000 자리 이하의 자연수

  < 입출력 예 #1 >
  P: "82195"
  S: "64723"
  result: 13

  < 입출력 예 #2 >
  P: "00000000000000000000"
  S: "91919191919191919191"
  result: 20

  0에서 9로 바꿔야 되는 경우는 역방향으로 1번,
  1로 바꿔야 되는 경우는 정방향으로 1번 회전시키는 경우가 최소이므로,
  20자리의 자물쇠에 대해 20번의 회전이 최솟값이 됩니다.
  그러므로 20을 return 하면 됩니다.

 */

export default function specialLock(p, s) {
  const initNumbers = p.split("").map(Number);
  const password = s.split("").map(Number);
  let countsOfTurn = 0;

  for (let i = 0; i < initNumbers.length; i++) {
    const forward =
      password[i] >= initNumbers[i]
        ? password[i] - initNumbers[i]
        : 10 + password[i] - initNumbers[i];
    const reverse =
      password[i] <= initNumbers[i]
        ? initNumbers[i] - password[i]
        : 10 + initNumbers[i] - password[i];

    countsOfTurn += Math.min(forward, reverse);
  }

  return countsOfTurn;
}
