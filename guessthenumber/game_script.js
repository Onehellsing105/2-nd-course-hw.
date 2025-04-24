let numberToGuess;
let attemptsLeft;
let timer;
let timeLeft;
let isTimeMode = false;

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const message = document.getElementById('message');
const attempts = document.getElementById('attempts');
const result = document.getElementById('result');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart');
const timeModeButton = document.getElementById('time-mode');
const instructions = document.getElementById('instructions');

function startGame(isTimeModeActive = false) {
  isTimeMode = isTimeModeActive;
  numberToGuess = Math.floor(Math.random() * (isTimeMode ? 200 : 100)) + 1;
  attemptsLeft = isTimeMode ? Infinity : 10;
  timeLeft = isTimeMode ? 60 : null;

  guessInput.disabled = false;
  submitButton.disabled = false;
  guessInput.value = '';
  message.textContent = '';
  attempts.textContent = isTimeMode ? 'У вас 1 минута!' : `Осталось попыток: ${attemptsLeft}`;
  result.classList.add('hidden');
  instructions.textContent = isTimeMode
    ? 'У вас 1 минута, чтобы угадать число от 1 до 200!'
    : 'У вас есть 10 попыток, чтобы угадать число от 1 до 100!';

  if (isTimeMode) {
    startTimer();
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    attempts.textContent = `Осталось времени: ${timeLeft} секунд`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame(false);
    }
  }, 1000);
}

function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    message.textContent = '❌ Пожалуйста, введите число!';
    return;
  }

  if (!isTimeMode) {
    attemptsLeft--;
    attempts.textContent = `Осталось попыток: ${attemptsLeft}`;
  }

  if (userGuess === numberToGuess) {
    message.textContent = '🎉 Поздравляю! Вы угадали число!';
    resultText.textContent = '🎉 Ура! Вы выиграли!';
    resultText.classList.add('win');
    endGame(true);
  } else if (userGuess < numberToGuess) {
    message.textContent = '⬆️ Загаданное число больше.';
  } else {
    message.textContent = '⬇️ Загаданное число меньше.';
  }

  if (!isTimeMode && attemptsLeft === 0 && userGuess !== numberToGuess) {
    message.textContent = '😢 У вас закончились попытки. Попробуйте ещё раз!';
    resultText.textContent = '😢 К сожалению, вы проиграли. Попробуйте ещё раз!';
    resultText.classList.add('lose');
    endGame(false);
  }

  guessInput.value = '';
}

function endGame(isWin) {
  clearInterval(timer);
  submitButton.disabled = true;
  guessInput.disabled = true;
  result.classList.remove('hidden');
  timeModeButton.classList.toggle('hidden', !isWin);
}

function restartGame() {
  startGame();
}

submitButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);
timeModeButton.addEventListener('click', () => startGame(true));

guessInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkGuess();
  }
});

startGame();