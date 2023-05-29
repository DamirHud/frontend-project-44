#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import initName from '../src/cli.js';
import { generateNumber, wrongAnswer } from '../src/index.js';

function setCorrectAnswer(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

const name = initName();
const generatorLimit = 100;

console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let onPlay = true;
let correctAnswersCounter = 0;

while (onPlay) {
  const num = generateNumber(generatorLimit);
  console.log(`Question: ${num}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = setCorrectAnswer(num);

  if ((num % 2 === 0 && answer.toLowerCase() === 'yes') || (num % 2 !== 0 && answer.toLowerCase() === 'no')) {
    console.log('Correct!');
    correctAnswersCounter += 1;
  } else {
    console.log(wrongAnswer(answer, correctAnswer));
    console.log(`Let's try again, ${name}`);
    onPlay = false;
  }

  if (correctAnswersCounter === 3) {
    onPlay = false;
    console.log(`Congratulations, ${name}!`);
  }
}
