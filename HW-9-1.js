// 1

const heading = document.querySelector('#HeadingHTML');
const button = document.querySelector('#ButtonHTML');

button.addEventListener('click', () => {
    if (heading.style.display === 'none') {
        heading.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        heading.style.display = 'none';
        button.textContent = 'Показать';
    }
});

