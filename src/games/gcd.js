import { rand } from '../utils';
import frame from '..';

export const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (startNum, nextNum) => {
  let dividersForStartNum = [];
  let dividersForNextNum = [];
  for (let i = 1; i <= startNum; i += 1) {
    if (startNum % i === 0) {
      dividersForStartNum.push(i);
    }
  }
  for (let j = 1; j <= nextNum; j += 1) {
    if (nextNum % j === 0) {
      dividersForNextNum.push(j);
    }
  }
  const dividersForCommon = [];
  for (let z = 0; z < dividersForStartNum.length; z += 1) {
    for (let x = 0; x < dividersForNextNum.length; x += 1) {
      if (dividersForStartNum[z] === dividersForNextNum[x]) {
        dividersForCommon.push(dividersForStartNum[z]);
      }
    }
  }
  let greatestCommonDivisor = 1;
  for (let c = 0; c < dividersForCommon.length; c += 1) {
    greatestCommonDivisor *= Number(dividersForCommon[c]);
  }
  return greatestCommonDivisor;
};

export const gcd = () => {
  const startValueForFindGcd = rand();
  const nextValueForFindGcd = rand();
  const question = `${startValueForFindGcd} ${nextValueForFindGcd}`;
  const answer = String(findGcd(startValueForFindGcd, nextValueForFindGcd));
  return [question, String(answer)];
};
export const brainGcd = () => frame(gcd, description);

