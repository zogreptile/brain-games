import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${username}!\n`);

  return username;
};

const attempts = 3;

const getQuestion = pair => car(car(pair));
const getAnswer = pair => cdr(car(pair));
const questionToString = pair => cdr(pair);

const game = (description, gameMethods) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const generateQuestion = getQuestion(gameMethods);
  const generateAnswer = getAnswer(gameMethods);
  const logQuestion = questionToString(gameMethods);

  const username = askName();

  for (let i = 0; i < attempts; i += 1) {
    const question = generateQuestion();
    const correctAnswer = generateAnswer(question);

    console.log(`Question: ${logQuestion(question)}`);
    const userAnswer = readlineSync.question('Your answer: ');

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
