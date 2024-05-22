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
