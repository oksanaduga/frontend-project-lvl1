import { randomNumber } from '../utils';
import play from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';

export const isEven = n => n % 2 === 0;

const createIsEvenQuestionAnswer = () => {
  const question = randomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
const brainEven = () => play(createIsEvenQuestionAnswer, description);
export default brainEven;
