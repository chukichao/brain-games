import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);

  const correctAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, [randomNumber]];
};

export default function runBrainEven() {
  runEngine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}
