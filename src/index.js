import readlineSync from 'readline-sync';

const attempts = 3;

const game = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${username}!\n`);

  for (let i = 0; i < attempts; i += 1) {
    const gameData = generateGameData();
    const [question, answer] = gameData;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!\n');
    } else {
      console.log(`\n"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default game;
