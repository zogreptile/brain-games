import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';

const description = 'Balance the given number.';

const getQuestion = () => cons(1, 2);

const getCorrectAnswer = question => String(question);

const questionToString = question => `${car(question)} ${cdr(question)}`;

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
