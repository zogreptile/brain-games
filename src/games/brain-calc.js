import game from '..';
import {
  toString,
  randomNumber, randomMathOperation,
  mathExpression, mathExpressionToString,
  getFirstDigit, getSecondDigit, getOperation,
} from '../utils';

const description = 'What is the result of the expression?';

const getQuestion = () =>
  mathExpression(randomNumber(0, 10), randomNumber(0, 10), randomMathOperation());

const getCorrectAnswer = (question) => {
  const operation = getOperation(question);

  switch (operation) {
    case '+':
      return toString(getFirstDigit(question) + getSecondDigit(question));
    case '-':
      return toString(getFirstDigit(question) - getSecondDigit(question));
    case '*':
      return toString(getFirstDigit(question) * getSecondDigit(question));
    default:
  }
};

const questionToString = question => mathExpressionToString(question);

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
