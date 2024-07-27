/*

  문제 설명은 README를 참고하세요.

 */

export default function factory(needs, r) {
  const partsUsage = needs.map((products) => {
    products.forEach((part, index) => {
      if (part[index] === 1) partsUsage[index] = (partsUsage[index] || 0) + 1;
    });
  });

  const selectedParts = [];
  partsUsage
    .sort((a, b) => b - a)
    .slice(0, r)
    .forEach((_part, index) => {
      selectedParts[index] = true;
    });

  let count = 0;
  needs.forEach((product) => {
    if (
      product.filter((part, index) => part === 1 && !selectedParts[index])
        .length === 0
    ) {
      count++;
    }
  });
  return count;
}
