document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const clickCounter = document.getElementById('click-counter');
    const currentColor = document.getElementById('current-color');
    const colorHistory = document.getElementById('color-history');
    const resetBtn = document.getElementById('reset-btn');
    
    let clicks = 0;
    let colorsHistory = [];
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    function getContrastColor(hex) {
        const r = parseInt(hex.slice(1, 3)), 
              g = parseInt(hex.slice(3, 5)), 
              b = parseInt(hex.slice(5, 7));
        return (r * 0.299 + g * 0.587 + b * 0.114) > 150 ? '#000000' : '#FFFFFF';
    }
    
    function handleClick() {
        clicks++;
        const newColor = getRandomColor();
        
        body.style.background = newColor;
        body.style.color = getContrastColor(newColor);
        clickCounter.textContent = `Кликов: ${clicks}`;
        currentColor.textContent = `Фон: ${newColor}`;
        
        colorsHistory.unshift(newColor);
        if (colorsHistory.length > 5) colorsHistory.pop();
        colorHistory.innerHTML = `Последние цвета: ${colorsHistory.join(', ')}`;
    }
    
    function resetGame() {
        clicks = 0;
        colorsHistory = [];
        body.style.background = '';
        body.style.color = '';
        clickCounter.textContent = `Кликов: 0`;
        currentColor.textContent = `Фон: #FFFFFF`;
        colorHistory.textContent = `Последние цвета: `;
    }
    
    body.addEventListener('click', handleClick);
    resetBtn.addEventListener('click', resetGame);
    
    resetGame();
});