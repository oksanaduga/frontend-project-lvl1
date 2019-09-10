import { randomNumber, randomElement } from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const lengthProgression = 10;

const generateRoundDate = () => {
  const startElement = randomNumber();
  const progressionStep = randomNumber();
  let progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startElement + progressionStep * i);
  }
  const elementFromNumbersOfProgression = randomElement(progression);
  const hiddenElementIndex = progression.indexOf(elementFromNumbersOfProgression);
  progression.splice(hiddenElementIndex, 1, '..');
  const rightAnswer = String(progressionStep);
  const question = progression.join(' ');
  return [question, rightAnswer];
};
export default () => play(generateRoundDate, description);
