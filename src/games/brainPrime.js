import readlineSync from 'readline-sync';

const validate = (randomPrimeNumber, userAnswer) => {
  const correctAnswer = () => {
    for (let i = 2; i < randomPrimeNumber; i += 1) {
      if (randomPrimeNumber % i === 0) return 'no';
    }
    return 'yes';
  };

  if (userAnswer !== 'yes' && userAnswer !== 'no') return [false, correctAnswer()];

  if (userAnswer === correctAnswer()) {
    return [true, userAnswer, correctAnswer()];
  }

  return [false, userAnswer, correctAnswer()];
};

function brainPrime(userName) {
  let countRightAnswers = 0;
  while (countRightAnswers < 3) {
    const randomPrimeNumber = Math.floor(Math.random() * 100 + 2);

    console.log(`Question: ${randomPrimeNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isCorrectAnswer = validate(randomPrimeNumber, userAnswer);
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

export default brainPrime;
