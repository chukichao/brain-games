import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const validate = (randomNumber, userAnswer) => {
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

  if (userAnswer !== 'yes' && userAnswer !== 'no') return [false, correctAnswer];

  if (userAnswer === correctAnswer) {
    return [true, userAnswer, correctAnswer];
  }

  return [false, userAnswer, correctAnswer];
};

function brainEven(userName) {
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectAnswer = validate(randomNumber, userAnswer);
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

export default brainEven;
