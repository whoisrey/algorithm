/*
 *
 * 자연수 n의 각 자리 숫자를 더하면 새로운 자연수 n'을 만들 수 있습니다.
 * 또 새로운 자연수 n'의 각 자릿수를 더하여 새로운 자연수 n''을 만들 수 있습니다.
 * 이 과정을 계속 반복하면 최종적으로 한 자리 숫자를 만들 수 있습니다.
 *
 * - 456789의 각 자리 숫자를 더하면 4 + 5 + 6 + 7 + 8 + 9 = 39
 * - 39는 3 + 9 = 12
 * - 12는 1 + 2 = 3
 *
 * 위와 같이 반복하여 한 자리 숫자 3을 얻을 수 있습니다.
 *
 * 자연수 n이 주어졌을 때 각 자릿수를 더하는 과정을 반복하여 한 자리 숫자를 만들어 반환하는 함수를 완성해 주세요.
 *
 * < Examples >
 *
 * concatNumber(10);      // 1
 * concatNumber(456789);  // 3
 *
 */

export default function concatNumber(k) {
  // your code..
  const kStr = String(k);

  // const kArr = kStr.split('')
  let kArr = [];
  for (let i of kStr) {
    kArr.push(i);
  }

  // const kNumArr = kArr.map((v) => Number(v))
  const kNumArr = [];
  for (let i of kArr) {
    kNumArr.push(Number(i));
  }

  // const kSum =  kNumArr.reduce((a, b) => a + b)
  let kSum = 0;
  for (let i of kNumArr) {
    kSum += i;
  }

  return kSum > 9 ? concatNumber(kSum) : kSum;
}
