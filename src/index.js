import readlineSync from 'readline-sync';

export const askName = () => {
    const username = readlineSync.question('May I have your name? ');
    console.log(`Hi, ${username}!`);
};