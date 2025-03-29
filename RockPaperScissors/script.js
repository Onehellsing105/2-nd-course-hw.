document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'
    };
    const resultText = document.getElementById('result');
    const playerScoreEl = document.getElementById('player-score');
    const computerScoreEl = document.getElementById('computer-score');
    const choiceBtns = document.querySelectorAll('.choice-btn');
    const restartBtn = document.getElementById('restart');
    
    let playerScore = 0;
    let computerScore = 0;
    
    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        let result;
        
        if (playerChoice === computerChoice) {
            result = 'Ничья!';
            resultText.className = 'draw';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'Вы победили!';
            playerScore++;
            resultText.className = 'win';
        } else {
            result = 'Компьютер победил!';
            computerScore++;
            resultText.className = 'lose';
        }
        
        resultText.innerHTML = 
        `Вы выбрали: ${emojis[playerChoice]}<br>
            Компьютер выбрал: ${emojis[computerChoice]}<br>
            <strong>${result}</strong>`;
        
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
    }
    
    choiceBtns.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.dataset.choice;
            playGame(playerChoice);
        });
    });
    
    restartBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreEl.textContent = '0';
        computerScoreEl.textContent = '0';
        resultText.textContent = '';
        resultText.className = '';
    });
});