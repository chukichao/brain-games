import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomItemFromArray = (array) => {
  const randomIndex = getRandomNumber(0, array.length - 1);

  return array[randomIndex];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const randomOperator = getRandomItemFromArray(['+', '-', '*']);

  const answer = calculate(randomNumber1, randomNumber2, randomOperator);

  return [String(answer), `${randomNumber1} ${randomOperator} ${randomNumber2}`];
};

export default function runBrainCalc() {
  runEngine('What is the result of the expression?', generateRound);
}
