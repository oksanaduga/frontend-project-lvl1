const randomNumber = () => Math.round(Math.random() * 100);

const randomElement = array => array[Math.floor(Math.random() * array.length)];

export { randomNumber, randomElement };
