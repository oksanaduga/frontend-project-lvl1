import randomNumber from '../utils';
import play from '..';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = n => n % 2 === 0;

const generateRoundData = () => {
  const question = randomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
export default () => play(generateRoundData, description);
