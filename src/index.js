import readlineSync from 'readline-sync';

function runEngine(rule, generateRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  const roundsCount = 3;
  for (let rightAnswersCount = 0; rightAnswersCount < roundsCount; rightAnswersCount += 1) {
    const [correctAnswer, questionParams] = generateRound();
    console.log(`Question: ${questionParams}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}

export default runEngine;
