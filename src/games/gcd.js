import { randomNumber } from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  while (y !== 0) y = x % (x = y);
  return x;
};

const generateRoundDate = () => {
  const a = randomNumber();
  const b = randomNumber();
  const question = `${a} ${b}`;
  const rightAnswer = String(findGcd(a, b));
  return [question, rightAnswer];
};
export default () => play(generateRoundDate, description);

