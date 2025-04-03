const descriptionEl =document.querySelectorAll('.description');

descriptionEl.forEach(element => {
    element.textContent = 'Измененный текст';
});