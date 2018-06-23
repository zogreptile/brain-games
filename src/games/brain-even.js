import { cons } from 'hexlet-pairs';
import game from '..';
import { randomNumber } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const getQuestion = () => randomNumber();
const getAnswer = question => (question % 2 === 0 ? 'yes' : 'no');
const questionToString = question => question;

const gameMethods = cons(cons(getQuestion, getAnswer), questionToString);

export default () => game(description, gameMethods);
