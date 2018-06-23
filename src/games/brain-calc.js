import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import { randomNumber } from '../utils';

const description = 'What is the result of the expression?';

export const randomMathOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

export const mathExpression = (a, b, operation) => cons(cons(a, b), operation);
export const getFirstDigit = expr => car(car(expr));
export const getSecondDigit = expr => cdr(car(expr));
export const getOperation = expr => cdr(expr);

const getQuestion = () =>
  mathExpression(randomNumber(0, 10), randomNumber(0, 10), randomMathOperation());

const getAnswer = (question) => {
  const operation = getOperation(question);

  switch (operation) {
    case '-':
      return String(getFirstDigit(question) - getSecondDigit(question));
    case '*':
      return String(getFirstDigit(question) * getSecondDigit(question));
    default:
      return String(getFirstDigit(question) + getSecondDigit(question));
  }
};

const questionToString = question =>
  `${getFirstDigit(question)} ${getOperation(question)} ${getSecondDigit(question)}`;

const gameMethods = cons(cons(getQuestion, getAnswer), questionToString);

export default () => game(description, gameMethods);
