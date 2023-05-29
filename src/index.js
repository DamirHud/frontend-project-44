export function generateNumber(lim) {
  return Math.floor(Math.random() * lim);
}

export function wrongAnswer(answer, correctValue) {
  return `'${answer}' is wrong answer ;(. Correct answer was '${correctValue}'.`;
}
