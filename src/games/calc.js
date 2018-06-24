import game from '..';
import { randomNumber } from '../utils';

const description = 'What is the result of the expression?';

const mathOperations = ['+', '-', '*'];

const getMathExpressionResult = (a, b, operation) => {
  switch (operation) {
    case '-':
      return String(a - b);
    case '*':
      return String(a * b);
    default:
      return String(a + b);
  }
};

const generateGameData = () => {
  const firstNumber = randomNumber(0, 10);
  const secondNumber = randomNumber(0, 10);
  const mathOperation = mathOperations[randomNumber(0, mathOperations.length - 1)];

  const question = `${firstNumber} ${mathOperation} ${secondNumber}`;
  const answer = getMathExpressionResult(firstNumber, secondNumber, mathOperation);

  return [question, answer];
};

export default () => game(description, generateGameData);
