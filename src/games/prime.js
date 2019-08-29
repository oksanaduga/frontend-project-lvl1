import { rand } from '../utils';
import frame from '..';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const dividersForNum = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividersForNum.push(i);
    }
  }
  return dividersForNum.length === 2;
};

export const prime = () => {
  const num = rand();
  const answ = isPrime(num) ? 'yes' : 'no';
  return [num, answ];
};
export const brainPrime = () => frame(prime, description);

