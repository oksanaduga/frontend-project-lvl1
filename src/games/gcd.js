import randomNumber from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => (b === 0 ? Math.abs(a) : findGcd(b, a % b));

const generateRoundData = () => {
  const a = randomNumber();
  const b = randomNumber();
  const question = `${a} ${b}`;
  const rightAnswer = String(findGcd(a, b));
  return [question, rightAnswer];
};

export default () => play(generateRoundData, description);
