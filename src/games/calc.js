import { randomNumber, randomElement } from '../utils';
import play from '..';

const description = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const calculator = () => {
  const a = randomNumber();
  const b = randomNumber();
  const [sign, func] = randomElement(operations);
  const question = `${a} ${sign} ${b}`;
  const rightAnswer = String(func(a, b));
  return [question, rightAnswer];
};

const brainCalc = () => play(calculator, description);

export default brainCalc;
