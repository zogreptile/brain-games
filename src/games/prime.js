import game from '..';
import { randomNumber } from '../utils';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  } else if (number === 2) {
    return true;
  }

  const numberHalf = Math.floor(number / 2);

  const iter = (acc) => {
    if (acc > numberHalf) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };

  return iter(2);
};

const description = 'Answer "yes" if number is prime otherwise answer "no".';

const generateGameData = () => {
  const question = randomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(description, generateGameData);
