import colors from './js/colors';

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};
refs.btnStart.addEventListener('click', startChangeColor);
refs.btnStop.addEventListener('click', stopChangeColor);

let idInterval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
}
function startChangeColor() {
  refs.btnStart.setAttribute('disabled', true);
  idInterval = setInterval(changeColor, 1000);
}
function stopChangeColor() {
  refs.btnStart.removeAttribute('disabled', true);
  clearInterval(idInterval);
}
