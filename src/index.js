import readlineSync from 'readline-sync';

const play = (makePair, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  const questionCount = 3;
  for (let i = 0; i < questionCount; i += 1) {
    const [question, answer] = makePair();
    console.log(`Question: ${question}`);
    const answerForPrint = readlineSync.question('Answer: ');
    if (answerForPrint === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerForPrint}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
