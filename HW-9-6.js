const addBtnEl = document.querySelector('#addBtn');

addBtnEl.addEventListener('click', () => {
    const newParagraph = document.createElement('p');

    newParagraph.textContent = 'Новый абзац';

    document.body.appendChild(newParagraph);
});