/*

  You are processing plane seat reservations. The plane has N rows of seats, numbered from 1 to N.
  There are ten seats in each row (labelled from A to K, with letter "I" omitted).

      A  B  C    D  E  F  G    H  J  K
  1  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]
  2  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]
  3  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]
  .
  .
  .
  N  [ ][ ][ ]  [ ][ ][ ][ ]  [ ][ ][ ]

  Some of the seats are already reserved. The list of reserved seats is given as a string S (of length M)
  containing seat numbers separated by single spaces:

  for example, "1A 3C 2B 40G 5A"

  The reserved seats can be listed in S in any order.

  Your task is to allocate seats for as many four-person families as possible.
  A four-person family occupies four seats in one row, that are next to each other
  - seat across an aisle (such as 2C and 2D) are not considered to be next to each other.
  It is permissible for the family to be separated by an aisle, but in this case exactly two people
  have to sit on each side of the aisle. Obviously, no seat can be allocated to more than one family.

  Write a function that, given the number of rows N and a list of reserved seats as string S,
  returns the maximum number of four-person families that can be seated in the remaining unreserved seats.

  For instance, given N = 2 and S = "1A 2F 1C", your function should return 2.
  The following figure shows one possible way of seating two families in the remaining seats:

      A  B  C    D  E  F  G    H  J  K
  1  [X][ ][X]  [P][P][P][P]  [ ][ ][ ]
  2  [ ][Q][Q]  [Q][Q][X][ ]  [ ][ ][ ]

  for family P and Q.

  Given N = 1 and S = "" (empty string), your function should return 2,
  because we can seat at most two families in a single row of seats, as shown in the figure below:

      A  B  C    D  E  F  G    H  J  K
  1  [ ][P][P]  [P][P][Q][Q]  [Q][Q][ ]

  for family P and Q.

  Assume that:

  - N is an integer within the range [1...50];
  - M is an integer within the range [0.. 1909];
  - string S consists of valid seat names separated with single spaces;
  - every seat number appears in string S at most once.

 */

export default function seatFinder(N, S) {
  const rows = [];
  const possible = {
    BCDE: true,
    DEFG: true,
    FGHJ: true,
  };

  for (let i = 0; i < N; i++) {
    rows.push({ ...possible });
  }

  if (S.length > 0) {
    const reservedSeats = S.split(" ");

    reservedSeats.forEach((seat) => {
      const seatNumber = Number(seat.slice(0, -1)) - 1;
      const seatLetter = seat.slice(-1);

      if (
        seatLetter === "B" ||
        seatLetter === "C" ||
        seatLetter === "D" ||
        seatLetter === "E"
      ) {
        rows[seatNumber].BCDE = false;
      }
      if (
        seatLetter === "D" ||
        seatLetter === "E" ||
        seatLetter === "F" ||
        seatLetter === "G"
      ) {
        rows[seatNumber].DEFG = false;
      }
      if (
        seatLetter === "F" ||
        seatLetter === "G" ||
        seatLetter === "H" ||
        seatLetter === "J"
      ) {
        rows[seatNumber].FGHJ = false;
      }
    });
  }

  let possibleCases = 0;

  rows.forEach((row) => {
    if (row.BCDE && row.FGHJ) {
      possibleCases += 2;
    } else if (row.BCDE || row.DEFG || row.FGHJ) {
      possibleCases += 1;
    }
  });

  return possibleCases;
}
