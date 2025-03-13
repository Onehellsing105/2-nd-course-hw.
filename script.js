document.getElementById('opengame-1').addEventListener('click', function() {
    window.location.href = 'guessthenumber/index.html';
});

document.getElementById('opengame-1_mobile').addEventListener('click', function() {
    fetch('guessthenumber/index.html')
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
        })
        .catch(error => console.error('Ошибка загрузки игры:', error));
});
