import readlineSync from 'readline-sync';
import isEven from './utils';

export const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${username}!\n`);

  return username;
};

const getCorrectAnswer = number => (isEven(number) ? 'yes' : 'no');

const askQuestion = (attempt, username) => {
  if (attempt === 3) {
    console.log(`Congratulations, ${username}!`);
    return true;
  }

  const number = Math.ceil(Math.random() * 20);
  const answer = readlineSync.question(`Question: ${number}`, { hideEchoBack: true, mask: '' });
  const correctAnswer = getCorrectAnswer(number);

  console.log(`Your answer: ${answer}`);

  if (answer === correctAnswer) {
    console.log('Correct!\n');
    return askQuestion(attempt + 1, username);
  }

  console.log(`\n"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}!`);

  return false;
};

export const initBrainEven = () => {
  const attempt = 0;
  const username = askName();
  askQuestion(attempt, username);
};
