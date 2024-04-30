/**
 *
 * Detect if the given two JSON-like objects are equal.
 *
 * [DO NOT USE] JSON.parse or JSON.stringify
 *
 * deepEquals({ name: 'ken', age: 33 }, { name: 'ken', age: 33 }); // true
 *
 * deepEquals({ name: 'ken', work: { company: 'vanilla coding', since: 2017 } }, { name: 'ken', work: { company: 'vanilla coding', since: 2017 } }); // true
 *
 */

export default function deepEquals(original, target) {
  const keysOfOriginal = Object.keys(original);

  for (const key of keysOfOriginal) {
    const valueOfOriginal = original[key];
    const valueOfTarget = target[key];
    const isObject = (value) => {
      return typeof value === "object";
    };

    if (isObject(valueOfOriginal)) {
      return deepEquals(valueOfOriginal, valueOfTarget);
    }

    if (valueOfOriginal !== valueOfTarget) {
      return false;
    }
  }

  return true;
}
