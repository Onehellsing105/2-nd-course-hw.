const removeButton = document.querySelector('#removeBtn');

removeButton.addEventListener('click', () => {
    const descriptions = document.querySelectorAll('p.description');

    if (descriptions.length > 0) {
        descriptions[0].remove();
        console.log('элемент удалён');
    } else {
        removeButton.disabled = true;
        console.log('элементы кончились');
    }
})