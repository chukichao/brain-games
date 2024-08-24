import runEngine from '../index.js';
import { getRandomNumber } from '../utils/utilsRandom.js';
import { isNumberPrime } from '../utils/utilsNumber.js';

const generateQuestion = () => {
  const randomNumber = getRandomNumber(2, 100);
  return [randomNumber];
};

const calculate = (randomNumber) => {
  const correctAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

export default function runBrainPrime() {
  runEngine(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestion,
    calculate,
  );
}
