import game from '..';
import { randomNumber } from '../utils';

const description = 'Balance the given number.';

const numberToDigits = (number) => {
  const stringifiedNumber = String(number);
  let digits = [];

  for (let i = 0; i < stringifiedNumber.length; i += 1) {
    digits.push(Number(stringifiedNumber[i]));
  }

  digits = digits.sort();

  return digits;
};

const balanceNumber = (number) => {
  const digits = numberToDigits(number);
  let firstEl = digits[0];
  let lastEl = digits[digits.length - 1];

  while (lastEl - firstEl > 1) {
    digits[0] = lastEl - 1;
    digits[digits.length - 1] = firstEl + 1;
    digits.sort();
    [firstEl] = digits;
    lastEl = digits[digits.length - 1];
  }

  return digits.join('');
};

const generateGameData = () => {
  const question = randomNumber(10, 5000);
  const answer = balanceNumber(question);

  return [question, answer];
};

export default () => game(description, generateGameData);
