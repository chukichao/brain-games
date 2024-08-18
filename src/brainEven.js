import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const genRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const validateEvenNumber = (randomNumber, userAnswer) => {
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== 'yes' && userAnswer !== 'no') return [false, correctAnswer];

  if (userAnswer === correctAnswer) {
    return [true, correctAnswer];
  }

  return [false, correctAnswer];
};

function brainEven() {
  const userName = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const randomNumber = genRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectAnswer = validateEvenNumber(randomNumber, userAnswer);
    if (isCorrectAnswer[0] === true) {
      console.log('Correct!');
      countRightAnswers += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was '${isCorrectAnswer[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      countRightAnswers = 0;
    }
  }

  console.log(`Congratulations, ${userName}`);
}

export default brainEven;
