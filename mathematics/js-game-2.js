let currentExpression, correctAnswer;

function generateExpression() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    if (operator === '/') {
        num2 = Math.floor(Math.random() * 10) + 1;
        num1 = num2 * (Math.floor(Math.random() * 10) + 1);
    }

    currentExpression = `${num1} ${operator} ${num2}`;
    correctAnswer = eval(currentExpression);
    document.getElementById('expression').textContent = `Решите выражение: ${currentExpression}`;
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const message = document.getElementById('message');

    if (isNaN(userAnswer)) {
        message.textContent = '❌ Пожалуйста, введите число!';
        message.className = '';
        return;
    }

    if (userAnswer === correctAnswer) {
        message.textContent = '🎉 Поздравляю! Ответ правильный!';
        message.className = 'win';
    } else {
        message.textContent = '😢 К сожалению, ответ неправильный. Попробуйте ещё раз!';
        message.className = 'lose';
    }
}

function restartGame() {
    generateExpression();
    document.getElementById('answer').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = '';
}

document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('restart').addEventListener('click', restartGame);
document.getElementById('answer').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
});

generateExpression(); 