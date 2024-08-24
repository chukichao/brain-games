import readlineSync from 'readline-sync';

function runEngine(rule, generateQuestion, calculate) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  let rightAnswersCount = 0;
  for (; rightAnswersCount < 3; rightAnswersCount += 1) {
    const questionParams = generateQuestion();
    console.log('Question:', questionParams.join(' '));

    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculate(...questionParams);

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
  }

  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}

export default runEngine;
