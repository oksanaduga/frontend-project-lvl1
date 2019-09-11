import randomNumber from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const lengthProgression = 10;

const generateRoundData = () => {
  const startElement = randomNumber();
  const progressionStep = randomNumber();
  let progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startElement + progressionStep * i);
  }
  const hiddenElementIndex = randomNumber(progression.length);

  const rightAnswer = String(progression[hiddenElementIndex]);
  progression.splice(hiddenElementIndex, 1, '..');
  const question = progression.join(' ');
  return [question, rightAnswer];
};
export default () => play(generateRoundData, description);
