import readlineSync from 'readline-sync';

const getRandomProgression = () => {
  let randomNumber = Math.floor(Math.random() * 100 + 1);

  const progression = [];
  for (let i = 1; i <= 10; i += 1) {
    randomNumber += 3;
    progression.push(randomNumber);
  }

  return progression;
};

const getRandomIndex = () => {
  const min = Math.ceil(0);
  const max = Math.floor(9);
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
  return randomIndex;
};

const validate = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    return [true, userAnswer, correctAnswer];
  }

  return [false, userAnswer, correctAnswer];
};

function brainProgression() {
  const randomProgression = getRandomProgression();
  const randomIndex = getRandomIndex();

  const correctAnswer = randomProgression[randomIndex];
  randomProgression[randomIndex] = '..';

  console.log(`Question: ${randomProgression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  const isCorrectAnswer = validate(correctAnswer, userAnswer);
  return isCorrectAnswer;
}

export default brainProgression;
