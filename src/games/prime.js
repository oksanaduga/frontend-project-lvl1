import { randomNumber } from '../utils';
import play from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  const divider = Math.floor(num / 2);
  const dividersForNum = [];
  if (num % num === 0) {
    dividersForNum.push(num);
  }
  for (let i = 1; i <= divider; i += 1) {
    if (num % i === 0) {
      dividersForNum.push(i);
    }
  }
  return dividersForNum.length === 2;
};

const isPrime = () => {
  const question = randomNumber();
  const answer = getPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainPrime = () => play(isPrime, description);

export default brainPrime;
