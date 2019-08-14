import { rand } from '../utils';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const prime = () => {
  const num = rand();
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  const answ = arr.length === 2 ? 'yes' : 'no';
  return [num, answ];
};

