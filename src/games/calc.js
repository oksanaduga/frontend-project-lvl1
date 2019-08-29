import { rand } from '../utils';
import frame from '..';

export const description = 'What is the result of the expression?';

export const calculator = () => {
  let startValueForCalculate = rand();
  let nextValueForCalculate = rand();
  const question1 = `${startValueForCalculate} + ${nextValueForCalculate}`;
  const rightAnswer1 = String(startValueForCalculate + nextValueForCalculate);
  const question2 = `${startValueForCalculate} - ${nextValueForCalculate}`;
  const rightAnswer2 = String(startValueForCalculate - nextValueForCalculate);
  const question3 = `${startValueForCalculate} * ${nextValueForCalculate}`;
  const rightAnswer3 = String(startValueForCalculate * nextValueForCalculate);
  return [question1, rightAnswer1, question2, rightAnswer2, question3, rightAnswer3];
};

export const brainCalc = () => frame(calculator, description);
