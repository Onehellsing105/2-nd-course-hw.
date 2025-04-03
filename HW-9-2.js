const textEl = document.querySelector('#text');
const buttonEl = document.querySelector('#button');

buttonEl.addEventListener('click', () => {
    textEl.style.color = 'blue';
});