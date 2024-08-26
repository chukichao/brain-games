import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getGreatestCommonDivisor = (number1, number2) => {
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
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);

  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return [String(correctAnswer), [randomNumber1, randomNumber2]];
};

export default function runBrainGcd() {
  runEngine('Find the greatest common divisor of given numbers.', generateRound);
}
