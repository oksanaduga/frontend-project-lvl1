import { rand, isEven } from '../utils';
import frame from '..';

export const description = 'Answer "yes" if number even otherwise answer "no"';

export const createEvenQA = () => {
  const question = rand();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
export const brainEven = () => frame(createEvenQA, description);
