import readlineSync from 'readline-sync';


const welcome = () => {
  console.log('Welcome to the Brain Games!\nifAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const isEven = () => {
  welcome();
  console.log('\n');
  let l = 0;
  const yes = '"yes"';
  const no = '"no"';
  for (let i = l; i < 3; i += 1) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const even = n => n % 2 === 0;
    const e = even(num);
    if ((answer !== yes && e) || (answer !== no && !e)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was ${e ? yes : no} Let's try again, !`);
      break;
    } else {
      console.log('Correct!');
    };
  };
  if (l === 2) {
    console.log('Congratulations!');
  };
};

export { welcome, isEven };
