import readlineSync from 'readline-sync';

export const toString = value => String(value);

export const cons = (a, b) => (selector) => {
  switch (selector) {
    case 'car':
      return a;
    case 'cdr':
      return b;
    default:
  }
};

export const car = pair => pair('car');
export const cdr = pair => pair('cdr');

export const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${username}!\n`);

  return username;
};

export const isEven = num => num % 2 === 0;

export const randomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const randomMathOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[Math.floor(Math.random() * operations.length)];
};

export const mathExpression = (a, b, operation) => cons(cons(a, b), operation);
export const getFirstDigit = expr => car(car(expr));
export const getSecondDigit = expr => cdr(car(expr));
export const getOperation = expr => cdr(expr);
export const mathExpressionToString = expr => `${getFirstDigit(expr)} ${getOperation(expr)} ${getSecondDigit(expr)}`;

