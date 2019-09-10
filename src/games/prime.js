import { randomNumber } from '../utils';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 0) {
    return false;
  }
  const limiter = Math.floor(num / 2);
  for (let i = 1; i <= limiter; i += 1) {
    if (i !== num && i !== 1 && num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundDate = () => {
  const question = randomNumber();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
export default () => play(generateRoundDate, description);
