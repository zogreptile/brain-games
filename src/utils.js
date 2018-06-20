import readlineSync from 'readline-sync';

export const isEven = num => num % 2 === 0;

export const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${username}!\n`);

  return username;
};
