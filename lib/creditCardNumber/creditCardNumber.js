/*

  문제 설명은 README를 참고하세요.

 */

export default function creditCardNumber(card_numbers) {
  const validateCardNumber = card_numbers.map((card_number) => {
    if (!isValidFormat(card_number)) {
      return 0;
    }

    if (card_number.includes("-")) {
      card_number = card_number.split("-").join("");
    }

    return validateLuhn(card_number) ? 1 : 0;
  });

  return validateCardNumber;
}

function isValidFormat(number) {
  if (number.includes("-")) {
    const parts = number.split("-");

    if (parts.length !== 4) {
      return false;
    }

    return parts.every((part) => part.length === 4);
  } else {
    return number.length === 16;
  }
}

function validateLuhn(card_number) {
  let even = 0;

  for (let i = card_number.length - 2; i >= 0; i -= 2) {
    let digit = Number(card_number[i]) * 2;

    if (digit > 9) {
      digit = String(digit)
        .split("")
        .map((char) => Number(char))
        .reduce((total, digit) => total + digit);
    }

    even += digit;
  }

  let odd = 0;

  for (let i = card_number.length - 1; i >= 0; i -= 2) {
    odd += Number(card_number[i]);
  }

  return (even + odd) % 10 === 0;
}
