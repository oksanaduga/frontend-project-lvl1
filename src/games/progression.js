import { rand } from '../utils';

export const description = 'Find the greatest common divisor of given numbers.';

export const progression = () => {
  const firstNum = rand();
  const secondNum = rand();
  let arrForDivider = [];
  let count = 1;
  for (let i = firstNum; count < 9; i + secondNum) {
    arrForDivider.push(i);
    count += 1;
    i += secondNum;
  }
  const elFromArray = arrForDivider[Math.floor(Math.random() * arrForDivider.length)];
  const indexOfElFromArr = arrForDivider.indexOf(elFromArray);
  const removed = arrForDivider.splice(indexOfElFromArr, 1, '..');
  return [arrForDivider.join(' '), String(elFromArray)];
};

