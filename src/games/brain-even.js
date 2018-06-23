import { isEven, randomNumber } from '../utils';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const getQuestion = () => randomNumber();
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');
const questionToString = question => question;

export default () => game(description, getQuestion, getCorrectAnswer, questionToString);
