import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);

  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [answer, `${randomNumber}`];
};

export default function runBrainEven() {
  runEngine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}
