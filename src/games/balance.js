import game from '..';
import { randomNumber } from '../utils';

const description = 'Balance the given number.';

const balanceNumber = (digits) => {
  let firstEl = digits[0];
  let lastEl = digits[digits.length - 1];
  const digitsCopy = digits.slice();

  while (lastEl - firstEl > 1) {
    digitsCopy[0] = lastEl - 1;
    digitsCopy[digitsCopy.length - 1] = firstEl + 1;
    digitsCopy.sort();
    [firstEl] = digitsCopy;
    lastEl = digitsCopy[digitsCopy.length - 1];
  }

  return digitsCopy.join('');
};

const getAnswer = (question) => {
  const stringifiedNumber = String(question);
  let digitsArray = [];

  for (let i = 0; i < stringifiedNumber.length; i += 1) {
    digitsArray.push(Number(stringifiedNumber[i]));
  }

  digitsArray = digitsArray.sort();

  return balanceNumber(digitsArray);
};

const generateGameData = () => {
  const question = randomNumber(10, 5000);
  const answer = getAnswer(question);

  return [question, answer];
};

export default () => game(description, generateGameData);
