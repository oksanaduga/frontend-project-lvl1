import readlineSync from 'readline-sync';

const frame = (func, description) => {
  console.log('Welcome to the Brain Games!');
  if (typeof descripyion !== 'undefined') {
    console.log(description);
  }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  if (typeof func === 'undefined') {
    return;
  }
  const sumOfPlayQuesion = 3;
  for (let i = 0; i < sumOfPlayQuesion; i += 1) {
    const [q, a] = func();
    console.log(`Question: ${q}`);
    const answer = readlineSync.question('Answer: ');
    if (answer === a) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${a}". Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default frame;

// реализовать функцию она принимает
// - функцию (ничего не принимает, возращает: вопрос и правильный ответ на него)
// - описание игры
// не возвращает ничего
//
// 1) приветствует пользователя
// 2) выводит на экран описание
// 3) получает имя пользователя
// 4) выводит на экран приветствие пользователя
// 5) 3 раза выполняет: 
// 5.1) вызывает функцию из аргумента  
// 5.2) выводит на экран вопрос  
// 5.3) получает ответ от пользователя  
// 5.4) сравнивает ответ и правильный ответ
// 5.5) если ответ правильный вывести на экран Correct, если не правильный вывести на экран "is wrong answer ;(. Correct answer was '175'."
// 6) Поздравить пользователя
