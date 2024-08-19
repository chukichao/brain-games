import readlineSync from 'readline-sync';

const validate = (randomPrimeNumber, userAnswer) => {
  const correctAnswer = () => {
    for (let i = 2; i < randomPrimeNumber; i += 1) {
      if (randomPrimeNumber % i === 0) return 'no';
    }
    return 'yes';
  };

  if (userAnswer !== 'yes' && userAnswer !== 'no') return [false, userAnswer, correctAnswer()];

  if (userAnswer === correctAnswer()) {
    return [true, userAnswer, correctAnswer()];
  }

  return [false, userAnswer, correctAnswer()];
};

function brainPrime() {
  const randomPrimeNumber = Math.floor(Math.random() * 100 + 2);

  console.log(`Question: ${randomPrimeNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const isCorrectAnswer = validate(randomPrimeNumber, userAnswer);
  return isCorrectAnswer;
}

export default brainPrime;
