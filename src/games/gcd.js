import game from '..';
import { randomNumber } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const generateGameData = () => {
  const firstNumber = randomNumber(1, 500);
  const secondNumber = randomNumber(1, 500);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));

  return [question, answer];
};

export default () => game(description, generateGameData);
