import readlineSync from 'readline-sync';

import brainEven from './games/brainEven.js';
import brainCalc from './games/brainCalc.js';
import brainGcd from './games/brainGcd.js';

function App(game, rule) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  switch (game) {
    case 'brainEven':
      brainEven(userName);
      break;
    case 'brainCalc':
      brainCalc(userName);
      break;
    case 'brainGcd':
      brainGcd(userName);
      break;
    default:
  }

  console.log(`Congratulations, ${userName}!`);
}

export default App;
