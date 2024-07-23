export default function pathOnGrid(r, c) {
  const directions = [
    [1, 0],
    [0, 1],
  ];
  let count = 0;

  function dfs(previousX, previousY) {
    if (previousX === r - 1 && previousY === c - 1) {
      count++;
      return;
    }

    for (const [x, y] of directions) {
      const movedX = previousX + x;
      const movedY = previousY + y;

      if (movedX < r && movedY < c) {
        dfs(movedX, movedY);
      }
    }
  }

  dfs(0, 0);

  return count;
}
