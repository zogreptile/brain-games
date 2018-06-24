import game from '..';
import { randomNumber } from '../utils';

const isEven = number => number % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const generateGameData = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(description, generateGameData);
