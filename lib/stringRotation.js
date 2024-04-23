/*
 *
 * Find out if a string is a rotation of another string.
 *
 * < Examples >
 *
 * isRotation("ABCD", "BCDA"); // true
 * isRotation("ABCD", "ACBD"); // false
 *
 */

export default function isRotation(a, b) {
  const aLength = a.length;
  const bLength = b.length;
  const doubleA = a + a;

  if (aLength !== bLength) {
    return false;
  }

  return doubleA.includes(b);
}
