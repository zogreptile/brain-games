import readlineSync from 'readline-sync';

const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${username}!\n`);

  return username;
};

const attempts = 3;

const game = (description, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const username = askName();

  for (let i = 0; i < attempts; i += 1) {
    const gameData = generateGameData();
    const question = gameData[0];
    const answer = gameData[1];

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
