import game from '..';
import { randomNumber } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const getQuestion = () => randomNumber();
const getCorrectAnswer = question => (question % 2 === 0 ? 'yes' : 'no');
const questionToString = question => question;

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
