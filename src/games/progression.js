import randomNumber from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const lengthProgression = 10;

const generateRoundData = () => {
  const startElement = randomNumber();
  const progressionStep = randomNumber();
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startElement + progressionStep * i);
  }
  const hiddenElement = progression[randomNumber(1, progression.length - 1)];
  const rightAnswer = String(hiddenElement);
  progression.splice(progression.indexOf(hiddenElement), 1, '..');
  const question = progression.join(' ');
  return [question, rightAnswer];
};

export default () => play(generateRoundData, description);
