import runEngine from '../index.js';
import { getRandomNumber } from '../utils/utilsRandom.js';
import { isNumberEven } from '../utils/utilsNumber.js';

const generateQuestion = () => {
  const randomNumber = getRandomNumber(1, 100);
  return [randomNumber];
};

const calculate = (randomNumber) => {
  const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

export default function runBrainEven() {
  runEngine(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestion,
    calculate,
  );
}
