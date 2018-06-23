import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import { randomNumber } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const getQuestion = () => cons(randomNumber(1, 500), randomNumber(1, 500));

const getCorrectAnswer = question => String(gcd(car(question), cdr(question)));

const questionToString = question => `${car(question)} ${cdr(question)}`;

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);