import runEngine from '../index.js';
import { getRandomNumber, getRandomItemFromArray } from '../utils/utilsRandom.js';

const generateQuestion = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const randomSign = getRandomItemFromArray(['+', '-', '*']);

  return [randomNumber1, randomSign, randomNumber2];
};

const calculate = (randomNumber1, randomSign, randomNumber2) => {
  let correctAnswer = 0;
  switch (randomSign) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
  }
  return String(correctAnswer);
};

export default function runBrainCalc() {
  runEngine('What is the result of the expression?', generateQuestion, calculate);
}
