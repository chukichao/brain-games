import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 100);

  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [answer, `${randomNumber}`];
};

export default function runBrainPrime() {
  runEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
}
