import { randomNumber } from '../utils';
import play from '..';

const description = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const generateRoundData = () => {
  const a = randomNumber();
  const b = randomNumber();
  const [sign, func] = operations[randomNumber(operations.length)];
  const question = `${a} ${sign} ${b}`;
  const rightAnswer = String(func(a, b));
  return [question, rightAnswer];
};

export default () => play(generateRoundData, description);
