import game from '..';
import { randomNumber } from '../utils';

const description = 'What number is missing in this progression?';

const getProgressionAndMissedElement = () => {
  const progressionLength = 10;
  const firstEl = randomNumber(1, 5);
  const step = randomNumber(2, 10);
  const missedElIndex = randomNumber(0, progressionLength - 1);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstEl + (step * i));
  }

  const missedEl = progression[missedElIndex];
  progression[missedElIndex] = '..';

  return [progression.join(' '), String(missedEl)];
};

const generateGameData = () => {
  const [question, answer] = getProgressionAndMissedElement();

  return [question, answer];
};

export default () => game(description, generateGameData);
