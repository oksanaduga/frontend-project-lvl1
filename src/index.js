import readlineSync from 'readline-sync';

const questionCount = 3;

export default (generateRoundData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let i = 0; i < questionCount; i += 1) {
    const [question, answer] = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
