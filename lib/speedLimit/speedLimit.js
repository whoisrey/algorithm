/*

  문제 설명은 README를 참고하세요.

 */

export default function speedLimit(speed_limit, cameras) {
  let speedingCount = 0;

  for (let i = 1; i < cameras.length; i++) {
    const distance = cameras[i][0] - cameras[i - 1][0];
    const time = cameras[i][1] - cameras[i - 1][1];
    const speed = distance / time;

    if (speed > speed_limit) {
      speedingCount++;
    }
  }

  return speedingCount;
}
