import readlineSync from 'readline-sync';
import { isEven } from './utils';

export const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${username}!\n`);

  return username;
};

const getCorrectAnswer = (number) => { return isEven(number) ? 'yes' : 'no'; };

export const isCorrectAnswer = (number, answer) => {
  const correctAnswer = getCorrectAnswer(number);

  if (answer !== correctAnswer) {
    return false;
  }

  return true;
};

export const askQuestion = (attempt, username) => {
  if (attempt === 3) {
    console.log(`Congratulations, ${username}!`);
    return true;
  }

  const number = Math.ceil(Math.random() * 20);
  const answer = readlineSync.question(`Question: ${number}`, { hideEchoBack: true, mask: '' });

  console.log(`Your answer: ${answer}`);

  if (isCorrectAnswer(number, answer)) {
    console.log('Correct!');
    return askQuestion(attempt + 1, username);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${getCorrectAnswer(number)}.\nLet's try again, ${username}!`);
};

export const initBrainEven = (username) => {
  askQuestion(0, username);
};
