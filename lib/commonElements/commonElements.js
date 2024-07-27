/*

  문제 설명은 README를 참고하세요.

 */

export default function findCommonElements(arr1, arr2, arr3) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const set3 = new Set(arr3);

  const result = [];

  for (const value of set1) {
    if (set2.has(value) && set3.has(value)) {
      result.push(value);
    }
  }

  return result.length !== 0 ? Math.max(...result) : -1;
}
