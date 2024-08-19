import readlineSync from 'readline-sync';

import brainEven from './games/brainEven.js';
import brainCalc from './games/brainCalc.js';
import brainGcd from './games/brainGcd.js';
import brainProgression from './games/brainProgression.js';
import brainPrime from './games/brainPrime.js';

function App(game, rule) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  let rightAnswersCount = 0;
  while (rightAnswersCount < 3) {
    let isCorrectAnswer = null;
    switch (game) {
      case 'brainEven':
        isCorrectAnswer = brainEven();
        break;
      case 'brainCalc':
        isCorrectAnswer = brainCalc();
        break;
      case 'brainGcd':
        isCorrectAnswer = brainGcd();
        break;
      case 'brainProgression':
        isCorrectAnswer = brainProgression();
        break;
      case 'brainPrime':
        isCorrectAnswer = brainPrime();
        break;
      default:
    }

    if (isCorrectAnswer[0] === true) {
      console.log('Correct!');
      rightAnswersCount += 1;
    } else {
      console.log(
        `'${isCorrectAnswer[1]}' is wrong answer ;(. Correct answer was '${isCorrectAnswer[2]}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export default App;
