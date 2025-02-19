/*

  카페 손님이 음료를 주문한 시각이 주어질 때, k분 동안 주문이 최대 몇 건 들어왔는지 구하려 합니다.

  예를 들어 음료를 주문한 시각이 ["12:10", "12:20", "12:40", "12:40", "12:50", "13:00", "13:20"]이고,
  k = 20분인 경우 "12:40"부터 "13:00" 까지가 20분 동안 주문이 가장 많이 들어온 때이며, 이때 들어온 주문은 4건입니다.

  음료 주문이 들어온 시각이 들어있는 배열 `orderTimes`와 자연수 k가 매개변수로 주어질 때,
  k 분 동안 주문이 최대 몇 건 들어왔는지 return 하도록 함수를 완성해주세요.

  < 제한사항 >
  - orderTimes 길이는 1 이상 1,000 이하입니다.
  - orderTimes 원소는 시각을 나타내는 문자열입니다.
  - 시각은 "HH:MM" 형식의 문자열입니다.
  - HH:MM은 HH시 MM분을 나타내며, 24시간 표기법으로 나타냅니다.
  - 시각은 05:00부터 23:59 까지 하루 동안의 시각만 들어있으며, 오름차순 정렬되어 있습니다.
  - 중복되는 시각이 있을 수 있으며, 이는 같은 시각에 음료 주문이 여러 건 들어온 것을 의미합니다.
  - k는 1 이상 120 이하인 자연수입니다.
  - k분이 시작하는 순간과 끝나는 순간에 들어온 주문도 포함해서 세면 됩니다.

  < 입출력 예 #1 >

  orderTimes: ["12:10", "12:20", "12:40", "12:40", "12:50", "13:00", "13:20"]
  k: 20
  result: 4

  k = 20분을 선택하는 방법은 다양합니다.

  예를 들어 "12:05"부터 "12:25" 사이에 들어온 주문은 "12:10", "12:20"에 들어온 주문으로 총 두 건입니다.
  또 다른 예로 "12:20"부터 "12:40" 사이에 들어온 주문은 "12:20", "12:40", "12:40"에 들어온 주문으로 총 세 건입니다.

  "12:40"부터 "13:00" 사이에 들어온 주문은 "12:40", "12:40", "12:50", "13:00"에 들어온 주문으로 총 네 건이며 이때가 최대입니다.

 */

export default function cafeOrders(orderTimes, k) {
  const orderMinutes = [];

  [...orderTimes].forEach((time) => {
    const [hours, minutes] = time.split(":").map(Number);

    orderMinutes.push(hours * 60 + minutes);
  });

  let start = 0;
  let maxOrderCounts = 0;

  for (let end = 0; end < orderMinutes.length; end++) {
    while (orderMinutes[end] - orderMinutes[start] > k) {
      start++;
    }

    const orderCounts = end - start + 1;

    if (orderCounts > maxOrderCounts) {
      maxOrderCounts = orderCounts;
    }
  }

  return maxOrderCounts;
}
