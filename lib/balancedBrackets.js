/**
 *
 * Detect if the given brackets are balanced
 *
 * balancedBrackets('({[]})({[]})');    // true
 *
 * balancedBrackets('{([)]}');          // false
 *
 *
 */

export default function balancedBrackets(input) {
  const brackets = input;

  if (brackets.length === 0) {
    return true;
  }

  const newBrackets = brackets
    .replace("()", "")
    .replace("{}", "")
    .replace("[]", "");

  if (newBrackets === brackets) {
    return false;
  }

  return balancedBrackets(newBrackets);
}
