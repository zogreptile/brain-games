import { isEven } from '../utils';
import game from '../index';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';
const getQuestion = () => Math.ceil(Math.random() * 100);
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');
const totalAttempts = 3;

export default () => game(rules, getQuestion, getCorrectAnswer, totalAttempts);
