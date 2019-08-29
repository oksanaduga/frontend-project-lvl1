import { rand } from '../utils';
import frame from '..';

export const description = 'Find the greatest common divisor of given numbers.';

export const progression = () => {
  const valueBeforeDesired = rand();
  const valueAfterDesired = rand();
  let numbersOfProgression = [];
  let count = 1;
  for (let i = valueBeforeDesired; count < 9; i + valueAfterDesired) {
    numbersOfProgression.push(i);
    count += 1;
    i += valueAfterDesired;
  }
  const elementFromNumbersOfProgression = numbersOfProgression[Math.floor(Math.random() * numbersOfProgression.length)];
  const indexOfElementFromArr = numbersOfProgression.indexOf(elementFromNumbersOfProgression);
  const removed = numbersOfProgression.splice(indexOfElementFromArr, 1, '..');
  return [numbersOfProgression.join(' '), String(elementFromNumbersOfProgression)];
};
export const brainProgression = () => frame(progression, description);
