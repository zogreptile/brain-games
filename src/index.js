import readlineSync from 'readline-sync';
import { askName } from './utils';

const game = (description, getQuestion, getCorrectAnswer, attempts) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);

  const username = askName();

  for (let i = 0; i < attempts; i += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);

    const userAnswer = readlineSync.question(`Question: ${question}`, { hideEchoBack: true, mask: '' });

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default game;
