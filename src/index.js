import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = function() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`
  }, 1000);
  startBtn.removeEventListener('click', changeColor);
}

startBtn.addEventListener('click',changeColor);

stopBtn.addEventListener('click', () => {
  clearTimeout(timerId);
  startBtn.addEventListener('click', changeColor);
});