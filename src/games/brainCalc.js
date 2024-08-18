import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 10 + 1);

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

  if (userAnswer === correctAnswer) {
    return [true, userAnswer, correctAnswer];
  }

  return [false, userAnswer, correctAnswer];
};

function brainCalc(userName) {
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const randomSign = getRandomSign();

    console.log(`Question: ${randomNumber1} ${randomSign} ${randomNumber2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    const isCorrectAnswer = validate(randomNumber1, randomNumber2, randomSign, userAnswer);
    if (isCorrectAnswer[0] === true) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else {
      console.log(
        `'${isCorrectAnswer[1]}' is wrong answer ;(. Correct answer was '${isCorrectAnswer[2]}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      countRightAnswers = 0;
    }
  }
}

export default brainCalc;
