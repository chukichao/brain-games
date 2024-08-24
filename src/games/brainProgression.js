import runEngine from '../index.js';
import {
  getRandomProgression,
  getRandomIndexFromArrayWithoutOutermost,
} from '../utils/utilsRandom.js';

const generateQuestion = () => {
  const progressionStep = 3;
  const randomProgression = getRandomProgression(0, 100, progressionStep);
  const randomIndex = getRandomIndexFromArrayWithoutOutermost(randomProgression);
  randomProgression[randomIndex] = '..';

  return [...randomProgression];
};

const calculate = (...randomProgression) => {
  let correctAnswer = 0;
  for (let i = 0; i < randomProgression.length; i += 1) {
    if (randomProgression[i] === '..') {
      const progressionStep = 3;
      correctAnswer = randomProgression[i + 1] - progressionStep;
    }
  }
  return String(correctAnswer);
};

export default function runBrainProgression() {
  runEngine('What number is missing in the progression?', generateQuestion, calculate);
}
