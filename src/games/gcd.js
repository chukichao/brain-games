import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getGreatestCommonDivisor = (num1, num2) => {
  const dividersByMinNumber = [];
  if (num1 <= num2) {
    for (let i = 1; i <= num1; i += 1) {
      dividersByMinNumber.push(i);
    }
  } else if (num1 >= num2) {
    for (let i = 1; i <= num2; i += 1) {
      dividersByMinNumber.push(i);
    }
  }

  const commonDividers = dividersByMinNumber.filter(
    (item) => num1 % item === 0 && num2 % item === 0,
  );

  const greatestCommonDivisor = commonDividers.at(-1);

  return greatestCommonDivisor;
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);

  const answer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return [String(answer), `${randomNumber1} ${randomNumber2}`];
};

export default function runBrainGcd() {
  runEngine('Find the greatest common divisor of given numbers.', generateRound);
}
