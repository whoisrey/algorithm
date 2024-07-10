/*
  R x C 크기의 흑백 이미지가 있습니다.

  1 x 1 크기의 각 칸은 한 개의 픽셀을 나타내며,
  검은색 또는 흰색으로 이루어져 있고,
  검은색 부분은 0, 흰색 부분은 1로 표현됩니다.

  이때, 우리는 흰색으로만 이루어진 영역이 몇 개인지 찾으려고 합니다.
  영역이란, 픽셀들이 가로 또는 세로로 서로 연결되어 있을 때 1개의 영역이라고 하며,
  픽셀의 개수가 그 영역의 넓이가 됩니다.

  단, 대각선으로 연결된 것은 같은 영역이 아닙니다.

  예를 들면, 6 x 5 크기의 이미지가

  +---+---+---+---+---+
  | 1 | 1 | 0 | 1 | 1 |
  +---+---+---+---+---+
  | 0 | 1 | 1 | 0 | 0 |
  +---+---+---+---+---+
  | 0 | 0 | 0 | 0 | 0 |
  +---+---+---+---+---+
  | 1 | 1 | 0 | 1 | 1 |
  +---+---+---+---+---+
  | 1 | 0 | 1 | 1 | 1 |
  +---+---+---+---+---+
  | 1 | 0 | 1 | 1 | 1 |
  +---+---+---+---+---+

  로 주어질때, 흰색 영역은 4개이며, 가장 큰 넓이는 8이 됩니다.

  흑백 이미지가 매개변수 board로 주어질 때, 흰색 영역의 개수와 흰색 영역 중에서 가장 큰 넓이를 return 하도록 함수를 완성해 주세요.
  단, 영역의 개수와 넓이 순으로 return 해주세요. 위의 예시의 경우, [4,8]을 return 하면 됩니다.

  < 제한사항 >
  - 흑백 이미지 v는 2차원 배열로 주어지며, 0 또는 1로만 이루어져 있습니다.
  - v는 R x C 크기의 2차원 배열입니다.
  - R , C : 50 이하의 자연수

  < 입출력 예 >
  board: [[1,1,0,1,1],[0,1,1,0,0],[0,0,0,0,0],[1,1,0,1,1],[1,0,1,1,1],[1,0,1,1,1]]
  result: [4,8]
 */

export default function imageAreaDetection(board) {
  const boardHeight = board[0].length;
  const boardWidth = board.length;

  let whiteSpacesCounts = 0;
  let largestSize = 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const isWhiteSpace = (x, y) => {
    return (
      x >= 0 && x < boardWidth && y >= 0 && y < boardHeight && board[x][y] === 1
    );
  };

  const getWhiteSpaceSize = (x, y) => {
    const queue = [[x, y]];
    board[x][y] = -1;
    let boardWidth = 0;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      boardWidth++;

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (isWhiteSpace(nx, ny)) {
          board[nx][ny] = -1;
          queue.push([nx, ny]);
        }
      }
    }

    return boardWidth;
  };

  for (let i = 0; i < boardWidth; i++) {
    for (let j = 0; j < boardHeight; j++) {
      if (board[i][j] === 1) {
        whiteSpacesCounts++;
        const currentSize = getWhiteSpaceSize(i, j);
        largestSize = Math.max(largestSize, currentSize);
      }
    }
  }

  return [whiteSpacesCounts, largestSize];
}
