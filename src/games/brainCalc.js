import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomItemFromArray = (array) => {
  const min = Math.ceil(0);
  const max = Math.floor(array.length - 1);

  const randomIndex = getRandomNumber(min, max);

  return array[randomIndex];
};

const calculate = (num1, num2, sigh) => {
  switch (sigh) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${sigh}'!`);
  }
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const randomSign = getRandomItemFromArray(['+', '-', '*']);

  const correctAnswer = calculate(randomNumber1, randomNumber2, randomSign);

  return [String(correctAnswer), [randomNumber1, randomSign, randomNumber2]];
};

export default function runBrainCalc() {
  runEngine('What is the result of the expression?', generateRound);
}
