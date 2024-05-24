export default function challenge(N, A, B) {
  const sortedA = A.sort();
  const sortedB = B.sort();

  let a = 0;
  let b = 0;
  let c = 0;

  if (sortedA.length < sortedB.length) {
    for (let i = 0; i < sortedB.length; i++) {
      if (sortedA.includes(sortedB[i])) {
        c++;
      }
    }
  } else {
    for (let i = 0; i < sortedA.length; i++) {
      if (sortedB.includes(sortedA[i])) {
        c++;
      }
    }
  }

  a = sortedA.length - c;
  b = sortedB.length - c;

  return [a, b, c];
}
