export function isNumberPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export function isNumberEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

export function getGreatestCommonDivisor(number1, number2) {
  const dividersByMinNumber = [];
  if (number1 <= number2) {
    for (let i = 1; i <= number1; i += 1) {
      dividersByMinNumber.push(i);
    }
  } else if (number1 >= number2) {
    for (let i = 1; i <= number2; i += 1) {
      dividersByMinNumber.push(i);
    }
  }

  const commonDividers = dividersByMinNumber.filter(
    (item) => number1 % item === 0 && number2 % item === 0,
  );

  const greatestCommonDivisor = commonDividers.at(-1);

  return greatestCommonDivisor;
}
