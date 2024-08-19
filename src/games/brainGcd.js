import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 10 + 1);

const validate = (randomNumber1, randomNumber2, userAnswer) => {
  const dividers = [];
  if (randomNumber1 <= randomNumber2) {
    for (let i = 1; i <= randomNumber1; i += 1) {
      dividers.push(i);
    }
  } else if (randomNumber1 >= randomNumber2) {
    for (let i = 1; i <= randomNumber2; i += 1) {
      dividers.push(i);
    }
  }

  const filterDividers = dividers.filter(
    (item) => randomNumber1 % item === 0 && randomNumber2 % item === 0,
  );

  let correctAnswer = 0;
  filterDividers.forEach((item) => {
    if (correctAnswer < item) {
      correctAnswer = item;
    }
  });

  if (Number(userAnswer) !== 'NaN' && Number(userAnswer) === correctAnswer) {
    return [true, userAnswer, correctAnswer];
  }

  return [false, userAnswer, correctAnswer];
};

function brainGcd() {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  console.log('Question:', randomNumber1, randomNumber2);
  const userAnswer = readlineSync.question('Your answer: ');

  const isCorrectAnswer = validate(randomNumber1, randomNumber2, userAnswer);
  return isCorrectAnswer;
}

export default brainGcd;
