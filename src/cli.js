import readlineSync from 'readline-sync';

export default function initName() {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question('Your answer: ');
  return name;
}
