import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const getRandomSign = () => {
  const signs = ['+', '-', '*'];

  const min = Math.ceil(0);
  const max = Math.floor(2);
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

  return signs[randomIndex];
};

const validate = (randomNumber1, randomNumber2, randomSign, userAnswer) => {
  let correctAnswer = null;
  switch (randomSign) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
  }

  if (Number(userAnswer) !== 'NaN' && Number(userAnswer) === correctAnswer) {
    return [true, userAnswer, correctAnswer];
  }

  return [false, userAnswer, correctAnswer];
};

function brainCalc() {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  const randomSign = getRandomSign();

  console.log('Question:', randomNumber1, randomSign, randomNumber2);
  const userAnswer = readlineSync.question('Your answer: ');

  const isCorrectAnswer = validate(randomNumber1, randomNumber2, randomSign, userAnswer);
  return isCorrectAnswer;
}

export default brainCalc;
