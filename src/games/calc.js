import randomNumber from '../utils';
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
  const [sign, operation] = operations[randomNumber(0, operations.length - 1)];
  const question = `${a} ${sign} ${b}`;
  const rightAnswer = String(operation(a, b));
  return [question, rightAnswer];
};

export default () => play(generateRoundData, description);
