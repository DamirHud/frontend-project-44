#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import initName from '../src/cli.js';
import { generateNumber, wrongAnswer } from '../src/index.js';

const name = initName();
let onPlay = true;
let correctAnswersCounter = 0;

const length = 10;
const step = 2;

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

while (onPlay) {
  const start = generateNumber(50);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const secretIndex = generateNumber(10);
  const secretNumber = progression[secretIndex];
  progression[secretIndex] = '..';

  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');

  if (secretNumber.toString() === answer.toString()) {
    console.log('Correct!');
    correctAnswersCounter += 1;
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      onPlay = false;
    }
  } else {
    console.log(wrongAnswer(answer, secretNumber));
    console.log(`Let's try again, ${name}!`);
    onPlay = false;
  }
}
