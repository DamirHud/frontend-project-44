#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import initName from '../src/cli.js';
import { generateNumber, wrongAnswer } from '../src/index.js';

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

const name = initName();
const limit = 100;
let correctAnswersCounter = 0;
let onPlay = true;

console.log('Find the greatest common divisor of given numbers.');

while (onPlay) {
  const num1 = generateNumber(limit);
  const num2 = generateNumber(limit);
  const divider = gcd(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  if (divider.toString() === answer.toString()) {
    console.log('Correct!');
    correctAnswersCounter += 1;
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      onPlay = false;
    }
  } else {
    console.log(wrongAnswer(answer, divider));
    console.log(`Let's try again, ${name}`);
    onPlay = false;
  }
}
