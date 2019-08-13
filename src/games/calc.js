import { rand } from '../utils';

export const description = 'What is the result of the expression?';

export const calculator = () => {
  let a = rand();
  let b = rand();
  const question1 = `${a} + ${b}`;
  const rightAnswer1 = String(a + b);
  const question2 = `${a} - ${b}`;
  const rightAnswer2 = String(a - b);
  const question3 = `${a} * ${b}`;
  const rightAnswer3 = String(a * b);
  return [question1, rightAnswer1, question2, rightAnswer2, question3, rightAnswer3];
};
