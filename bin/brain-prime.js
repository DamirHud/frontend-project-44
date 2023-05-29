#!/usr/bin/env node

// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import initName from '../src/cli.js';
import { generateNumber, wrongAnswer } from '../src/index.js';

const name = initName();
let onPlay = true;
let correctAnswersCounter = 0;

function isPrime(num) {
  for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
  return num !== 1;
}

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

while (onPlay) {
  const number = generateNumber(100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase();

  if ((answer === 'yes' && isPrime(number)) || (answer === 'no' && !isPrime(number))) {
    console.log('Correct!');
    correctAnswersCounter += 1;
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      onPlay = false;
    }
  } else {
    let correctAnswer = '';
    if (isPrime(number)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    console.log(wrongAnswer(answer, correctAnswer));
    console.log(`Let's try again, ${name}!`);
    onPlay = false;
  }
}
