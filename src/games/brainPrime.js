import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(2, 100);

  const correctAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, [randomNumber]];
};

export default function runBrainPrime() {
  runEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
}
