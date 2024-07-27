/*

  문제 설명은 README를 참고하세요.

 */

export default function gameSkills(skills, boss) {
  const sortedSkills = [...skills].sort((a, b) => b[0] - a[0]);
  const initialAttack = sortedSkills.reduce(
    (total, attack) => total + attack[0],
    0
  );
  const wholeAttack = sortedSkills.reduce(
    (total, attack) => total + attack[0] * attack[1],
    0
  );

  let totalDamage = 0;
  let attacks = 0;

  if (initialAttack < boss) {
    if (wholeAttack < boss) {
      return [-1];
    }
  }

  while (totalDamage < boss) {
    for (let [damage, count] of sortedSkills) {
      if (count > 0) {
        totalDamage += damage;
        attacks++;

        count--;

        if (totalDamage >= boss) {
          return [sortedSkills.length, attacks];
        }
      }
    }
  }
}
