import { rand, isEven } from '../utils';

export const description = 'Answer "yes" if number even otherwise answer "no"';

export const even = () => {
  const question = rand();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
