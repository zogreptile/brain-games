import game from '..';
import { randomNumber } from '../utils';

const description = 'Balance the given number.';

const balanceNumber = (digits) => {
  const firstEl = digits[0];
  const lastEl = digits[digits.length - 1];

  if (lastEl - firstEl > 1) {
    const digitsCopy = digits.slice();
    digitsCopy[0] = lastEl - 1;
    digitsCopy[digitsCopy.length - 1] = firstEl + 1;
    return balanceNumber(digitsCopy.sort());
  }

  return digits.join('');
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
