export default function infiniteMatchingString(s, t) {
  const sLength = s.length;
  const tLength = t.length;

  const repeatedS = s.repeat(tLength);
  const repeatedT = t.repeat(sLength);

  return repeatedS === repeatedT;
}
