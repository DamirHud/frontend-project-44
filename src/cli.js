import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');

  const name = readlineSync.question('Your answer: ');
  const greeting = `Hello, ${name}!`;

  return greeting;
}


