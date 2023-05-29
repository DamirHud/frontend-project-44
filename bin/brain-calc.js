#!/usr/bin/env node
// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
import initName from '../src/cli.js';
import { generateNumber, wrongAnswer } from '../src/index.js';

const name = initName();
const generatorLimit = 100;
let onPlay = true;
let correctAnswersCounter = 0;

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

while (onPlay) {
  const numA = generateNumber(generatorLimit);
  const numB = generateNumber(generatorLimit);
  const operation = Math.floor(Math.random() * 2);
  let res = 0;
  let sym = '';
  console.log(correctAnswersCounter);

  switch (operation) {
    case 0:
      sym = '+';
      res = numA + numB;
      console.log(`Question: ${numA} ${sym} ${numB}`);
      break;
    case 1:
      sym = '-';
      res = numA - numB;
      console.log(`Question: ${numA} ${sym} ${numB}`);
      break;
    case 2:
      sym = '*';
      res = numA * numB;
      console.log(`Question: ${numA} ${sym} ${numB}`);
      break;
    default:
      console.error('Invalid operation');
      break;
  }

  const answer = readlineSync.question('Your answer: ');

  if (res.toString() === answer.toString()) {
    console.log('Correct!');
    correctAnswersCounter += 1;
    if (correctAnswersCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      onPlay = false;
    }
  } else {
    console.log(wrongAnswer(answer, res));
    console.log(`Let's try again, ${name}!`);
    onPlay = false;
  }
}
