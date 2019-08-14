import { rand } from '../utils';

export const description = 'Find the greatest common divisor of given numbers.';

export const progression = () => {
  const a = rand();
  const b = rand();
  let arr = [];
  let count = 1;
  for (let i = a; count < 9; i + b) {
    arr.push(i);
    count += 1;
    i += b;
  }
  const elFromArray = arr[Math.floor(Math.random() * arr.length)];
  const indexOfElFromArr = arr.indexOf(elFromArray);
  const removed = arr.splice(indexOfElFromArr, 1, '..');
  return [arr.join(' '), String(elFromArray)];
};

