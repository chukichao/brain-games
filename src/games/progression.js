import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomProgression = (start, length, step) => {
  let currentNumber = start;

  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    currentNumber += step;
    progression.push(currentNumber);
  }

  return progression;
};

const generateRound = () => {
  const progressionStart = getRandomNumber(0, 100);
  const progressionLength = 10;
  const progressionStep = 3;
  const randomProgression = getRandomProgression(
    progressionStart,
    progressionLength,
    progressionStep,
  );

  const randomIndex = getRandomNumber(0, randomProgression.length - 1);
  const answer = randomProgression[randomIndex];
  randomProgression[randomIndex] = '..';

  return [String(answer), `${randomProgression.join(' ')}`];
};

export default function runBrainProgression() {
  runEngine('What number is missing in the progression?', generateRound);
}
