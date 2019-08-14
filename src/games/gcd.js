import { rand } from '../utils';

export const description = 'Find the greatest common divisor of given numbers.';

export const gcd = () => {
  const firstNum = rand();
  const secondNum = rand();
  const question = `${firstNum} ${secondNum}`;
  let arrFirstNum = [];
  let arrSecondNum = [];
  for (let i = 1; i <= firstNum; i += 1) {
    if (firstNum % i === 0) {
      arrFirstNum.push(i);
    }
  }
  for (let j = 1; j <= secondNum; j += 1) {
    if (secondNum % j === 0) {
      arrSecondNum.push(j);
    }
  }
  const arrForCommonFactor = [];
  for (let z = 0; z < arrFirstNum.length; z += 1) {
    for (let x = 0; x < arrSecondNum.length; x += 1) {
      if (arrFirstNum[z] === arrSecondNum[x]) {
        arrForCommonFactor.push(arrFirstNum[z]);
      }
    }
  }
  let answer = 1;
  for (let c = 0; c < arrForCommonFactor.length; c += 1) {
    answer *= Number(arrForCommonFactor[c]);
  }
  return [question, String(answer)];
};

