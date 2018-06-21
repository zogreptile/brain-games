import { isEven } from '../utils';
import game from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const getQuestion = () => Math.ceil(Math.random() * 100);
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');
const attempts = 3;

export default () => game(description, getQuestion, getCorrectAnswer, attempts);
