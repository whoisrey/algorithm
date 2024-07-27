/*

  바코페이를 이용해서 물품을 구매한 고객들에게 10% 할인 쿠폰을 지급하려 합니다.
  쿠폰을 지급하는 방법은 다음과 같습니다.

  물품을 구매한 고객은 하루에 최대 1장씩 할인 쿠폰을 받습니다.
  고객 한 명당 최대 k장까지 할인 쿠폰을 받을 수 있습니다.
  예를 들어 고객 한 명당 k = 2장까지 할인 쿠폰을 받을 수 있고,
  A 고객이 3일 동안 매일 물건을 구매했다면, 이 고객은 할인 쿠폰을 두 장 받습니다.

  각 날짜별로 바코페이를 이용해 물품을 구매한 고객들의 ID가 문자열 형태로 담긴 배열 idList,
  고객 한 명당 받을 수 있는 최대 쿠폰 수 k가 매개변수로 주어질 때,
  고객들에게 지급된 쿠폰은 모두 몇 장인지 return 하도록 함수를 완성해주세요.

  < 제한사항 >
  - idList의 길이는 1 이상 1,000 이하입니다.
  - idList의 원소는 각 날짜별로 물품을 구매한 고객 ID가 담긴 문자열입니다.
  - 각 문자열의 길이는 1 이상 10,000 이하입니다.
  - 문자열에서 고객 ID는 공백으로 구분되어 있습니다.
  - 고객 ID의 길이는 1 이상 10 이하이며, 알파벳 대문자로만 되어있습니다.
  - 하루에 물품을 여러 번 구매한 고객이 있을 수 있습니다.
  - k는 1 이상 idList의 길이 이하인 자연수입니다.

  < 입출력 예 #1 >
  idList: ["A B C D", "A D", "A B D", "B D"]
  k: 2
  result: 7

  첫째 날: A, B, C, D
  둘째 날: A, D
  셋째 날: B
  넷째 날: 없음

  - A 고객은 첫째, 둘째 날 쿠폰을 받고, 셋째 날에는 쿠폰을 받지 않습니다.
  - B 고객은 첫째, 셋째 날 쿠폰을 받고, 넷째 날에는 쿠폰을 받지 않습니다.
  - C 고객의 경우 첫째 날만 쿠폰을 받습니다.
  - D 고객은 첫째, 둘째 날 쿠폰을 받고, 셋째, 넷째 날에는 쿠폰을 받지 않습니다.
  - 따라서 쿠폰이 총 7장 지급됐습니다.

  < 입출력 예 #2 >
  idList: ["JAY", "JAY ELLE JAY MAY", "MAY ELLE MAY", "ELLE MAY", "ELLE ELLE ELLE", "MAY"]
  k: 3
  result: 8

  첫째 날: JAY
  둘째 날: JAY, ELLE, MAY
  셋째 날: ELLE, MAY
  넷째 날: ELLE, MAY
  다섯째 날: 없음
  여섯째 날: 없음

  - JAY가 둘째 날 물건을 두 번 구매했지만, 쿠폰은 하루에 1장만 받을 수 있습니다.
  - ELLE은 둘째, 셋째, 넷째 날 물건을 한 번씩 구매해서 쿠폰을 3장 받았습니다.
    다섯째 날 물건을 세 번 구매했으나, 이미 쿠폰을 모두 받았기 때문에 쿠폰을 더 받지는 못합니다.
  - MAY역시 둘째, 셋째, 넷째 날 쿠폰을 받았기 때문에 마지막 날 쿠폰을 받을 수 없습니다.
  - 따라서 쿠폰이 총 8장 지급됐습니다.

 */
export default function couponCalculator(idList, k) {
  const couponCounts = {};

  idList.forEach((list) => {
    const customerList = new Set(list.split(" "));

    customerList.forEach((customer) => {
      if (!couponCounts[customer]) {
        couponCounts[customer] = 1;
      } else if (couponCounts[customer] < k) {
        couponCounts[customer] += 1;
      }
    });
  });

  return Object.values(couponCounts).reduce((total, count) => total + count);
}
