import { rand } from '../utils';

export const description = 'Find the greatest common divisor of given numbers.';

export const gcd = () => {
  const a = rand();
  const b = rand();
  const question = `${a} ${b}`;
  let arra = [];
  let arrb = [];
  for (let i = 1; i <= a; i += 1) {
    if (a % i === 0) {
      arra.push(i);
    }
  }
  for (let j = 1; j <= b; j += 1) {
    if (b % j === 0) {
      arrb.push(j);
    }
  }
  const newArr = [];
  for (let z = 0; z < arra.length; z += 1) {
    for (let x = 0; x < arrb.length; x += 1) {
      if (arra[z] === arrb[x]) {
        newArr.push(arra[z]);
      }
    }
  }
  let answer = 1;
  for (let c = 0; c < newArr.length; c += 1) {
    answer *= Number(newArr[c]);
  }
  return [question, String(answer)];
};

