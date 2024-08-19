import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const validate = (randomNumber, userAnswer) => {
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== 'yes' && userAnswer !== 'no') return [false, userAnswer, correctAnswer];

  if (userAnswer === correctAnswer) {
    return [true, userAnswer, correctAnswer];
  }

  return [false, userAnswer, correctAnswer];
};

function brainEven() {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const isCorrectAnswer = validate(randomNumber, userAnswer);
  return isCorrectAnswer;
}

export default brainEven;
