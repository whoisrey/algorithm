/*

  단순 치환 암호(mono alphabetic substitution cipher)란
  단어를 이루는 각 알파벳을 다른 알파벳으로 일대일로 대치하여 암호화하는 것을 말합니다.
  예를 들어 "hello"라는 단어를 h → C, e → B, l → V, o → U로 치환하여 암호화한다면 "CBVVU"로 암호화됩니다.
  암호문을 해독하기 위해서는 각 문자와 암호화된 알파벳 간의 1:1 대응관계를 나타내 주는 표가 필요합니다.

  다음 그림은 암호문을 해독하기 위한 각 알파벳의 대응관계의 예시를 보여주는 표입니다.

  일반문 :  a  b  c  d  e  f  g  h  i  j  k  l  m
  암호문 :  Z  I  A  Y  B  D  J  C  X  E  W  V  G

  일반문 :  n  o  p  q  r  s  t  u  v  w  x  y  z
  암호문 :  F  U  T  S  H  M  N  K  Q  R  L  O  P

  위 표를 이용하여 "RUHVY"를 복호화하면 "world"가 됩니다.

  원문 s와 암호문 cipher가 주어질 때 원문(s)을 이루는 각각의 알파벳을 서로 다른 알파벳으로 일대일 대치하여 암호문(cipher)를 만들 수 있으면 true를,
  하나의 알파벳이 여러개의 알파벳으로 대치되는 등 [단순 치환 암호]의 조건에 맞지 않으면 false를 반환하도록 함수를 완성해 주세요.

  < 제한사항 >
  - 입력으로 주어지는 두 문자열의 길이는 서로 같으며 1,000보다 작거나 같습니다.
  - 두 문자열은 전부 소문자로만 이루어져 있습니다.

  < 입출력 예 #1 >

  s: hello
  cipher: cbvvu
  result: true

  원문	h	e	l	l	o
  암호문	c	b	v	v	u

  "h"는 "C"로, "e"는 "B"로, "l"은 "V"로, "o"는 "U"로 각각 대응되었기 때문에 true를 반환하면 됩니다.

  < 입출력 예 #2 >

  s: hello
  cipher: bbvmu
  result: false

  원문	h	e	l	l	o
  암호문	b	b	v	m	u

  "h"와 "e"가 동시에 "B"로 대응되었으며 "l"은 "V"와 "M"으로 대응되어 각 알파벳 간의 1:1 대응관계가 성립하지 않으므로 false를 반환하면 됩니다.

  < 입출력 예 #3 >

  s: world
  cipher: abcde
  result: true

  원문	w	o	r	l	d
  암호문	a	b	c	d	e

  "w"는 "A"로, "o"는 "B"로, "r"은 "C"로, "l"는 "D"로, "d"는 "E"로 각각 대응되었기 때문에 true를 반환하면 됩니다.

 */

export default function encryption(s, cipher) {
  const firstSet = new Set(s);
  const secondSet = new Set(cipher);

  if (firstSet.size !== secondSet.size) return false;

  const pairedCharacters = {};

  for (let i = 0; i < s.length; i++) {
    pairedCharacters[s[i]] = cipher[i];
  }

  const newSet = new Set(Object.values(pairedCharacters));

  if (newSet.size !== secondSet.size) return false;

  return true;
}
