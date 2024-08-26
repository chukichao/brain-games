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

const getRandomIndexFromArray = (array) => {
  const min = Math.ceil(0);
  const max = Math.floor(array.length - 1);
  const randomIndex = getRandomNumber(min, max);
  return randomIndex;
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

  const randomIndex = getRandomIndexFromArray(randomProgression);
  const correctAnswer = randomProgression[randomIndex];
  randomProgression[randomIndex] = '..';

  return [String(correctAnswer), [...randomProgression]];
};

export default function runBrainProgression() {
  runEngine('What number is missing in the progression?', generateRound);
}
