import game from '..';
import { randomNumber } from '../utils';

const description = 'What is the result of the expression?';

const randomMathOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const getAnswer = (a, b, operation) => {
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
  const mathOperation = randomMathOperation();

  const question = `${firstNumber} ${mathOperation} ${secondNumber}`;
  const answer = getAnswer(firstNumber, secondNumber, mathOperation);

  return [question, answer];
};

export default () => game(description, generateGameData);
