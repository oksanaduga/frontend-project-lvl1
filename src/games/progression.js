import { randomNumber, randomElement } from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const progression = () => {
  const startElement = randomNumber();
  const progressionStep = randomNumber();
  let progression = [];
  const lengthProgression = 10;
  for (let i = 1; i < lengthProgression; i += 1) {
    progression.push(startElement + progressionStep * i);
  }
  const elementFromNumbersOfProgression = randomElement(progression);
  const indexToRemove = progression.indexOf(elementFromNumbersOfProgression);
  progression.splice(indexToRemove, 1, '..');
  return [progression.join(' '), String(progressionStep)];
};
const brainProgression = () => play(progression, description);

export default brainProgression;