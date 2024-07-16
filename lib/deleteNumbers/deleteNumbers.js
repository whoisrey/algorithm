export default function deleteNumbers(n, board) {
  const position = {};
  const area = n * n;
  let totalDistance = 0;
  let startPoint = [0, 0];

  board.forEach((row, rowIndex) => {
    row.forEach((num, colIndex) => {
      position[num] = [rowIndex, colIndex];
    });
  });

  for (let num = 1; num <= area; num++) {
    const targetPoint = position[num];
    const verticalHeight = Math.min(
      Math.abs(startPoint[0] - targetPoint[0]),
      n - Math.abs(startPoint[0] - targetPoint[0])
    );
    const horizontalLength = Math.min(
      Math.abs(startPoint[1] - targetPoint[1]),
      n - Math.abs(startPoint[1] - targetPoint[1])
    );
    startPoint = targetPoint;
    totalDistance += verticalHeight + horizontalLength + 1;
  }

  return totalDistance;
}
