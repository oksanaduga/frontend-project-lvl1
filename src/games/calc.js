import { rand } from '../utils';

export const description = 'What is the result of the expression?';

export const calculator = () => {
  let firstNum = rand();
  let secondNum = rand();
  const question1 = `${firstNum} + ${secondNum}`;
  const rightAnswer1 = String(firstNum + secondNum);
  const question2 = `${firstNum} - ${secondNum}`;
  const rightAnswer2 = String(firstNum - secondNum);
  const question3 = `${firstNum} * ${secondNum}`;
  const rightAnswer3 = String(firstNum * secondNum);
  return [question1, rightAnswer1, question2, rightAnswer2, question3, rightAnswer3];
};
