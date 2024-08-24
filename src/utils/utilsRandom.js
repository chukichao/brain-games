export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomProgression(min, max, step) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  const progressionElementsCount = 10;
  const progressionStep = step;

  const progression = [];
  for (let i = 1; i <= progressionElementsCount; i += 1) {
    randomNumber += progressionStep;
    progression.push(randomNumber);
  }

  return progression;
}

export function getRandomItemFromArray(array) {
  const min = Math.ceil(0);
  const max = Math.floor(array.length - 1);

  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);

  return array[randomIndex];
}

export function getRandomIndexFromArrayWithoutOutermost(array) {
  const min = Math.ceil(1);
  const max = Math.floor(array.length - 2);
  const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
  return randomIndex;
}
