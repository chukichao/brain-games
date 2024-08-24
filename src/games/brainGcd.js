import runEngine from '../index.js';
import { getRandomNumber } from '../utils/utilsRandom.js';
import { getGreatestCommonDivisor } from '../utils/utilsNumber.js';

const generateQuestion = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  return [randomNumber1, randomNumber2];
};

const calculate = (randomNumber1, randomNumber2) => {
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);

  return String(correctAnswer);
};

export default function runBrainGcd() {
  runEngine('Find the greatest common divisor of given numbers.', generateQuestion, calculate);
}
