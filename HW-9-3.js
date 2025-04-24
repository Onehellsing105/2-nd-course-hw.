const textEl = document.querySelector('#text');
const buttonEl = document.querySelector('#button');

buttonEl.addEventListener('click', () => {
    textEl.textContent = 'Привет, мир!';
});

