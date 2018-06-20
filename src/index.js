import readlineSync from 'readline-sync';
import { askName } from './utils';

const game = (rules, getQuestion, getCorrectAnswer, totalAttempts) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}`);

  const username = askName();
  let attemptsLeft = totalAttempts;

  while (attemptsLeft > 0) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);

    const userAnswer = readlineSync.question(`Question: ${question}`, { hideEchoBack: true, mask: '' });

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}!`);
      break;
    }

    attemptsLeft -= 1;

    if (attemptsLeft === 0) console.log(`Congratulations, ${username}!`);
  }
};

export default game;
