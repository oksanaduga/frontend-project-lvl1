import { randomNumber } from '../utils';
import play from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  while (y !== 0) y = x % (x = y);
  return x;
};

const getGcd = () => {
  const startValueForFindGcd = randomNumber();
  const nextValueForFindGcd = randomNumber();
  const question = `${startValueForFindGcd} ${nextValueForFindGcd}`;
  const answer = String(findGcd(startValueForFindGcd, nextValueForFindGcd));
  return [question, answer];
};
const brainGcd = () => play(getGcd, description);

export default brainGcd;
