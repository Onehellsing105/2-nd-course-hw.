// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const scoreElement = document.getElementById('score');
    const totalElement = document.getElementById('total');
    const answersDetails = document.getElementById('answers-details');
    
    let currentQuestion = 0;
    let score = 0;
    let userAnswers = [];

    totalElement.textContent = quiz.length;

    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', restartQuiz);

    function startQuiz() {
        startBtn.classList.add('hidden');
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestion >= quiz.length) {
            showResult();
            return;
        }

        const question = quiz[currentQuestion];
        quizContainer.innerHTML = `
            <p class="question">${question.question}</p>
            <div class="options" id="options-container"></div>
            <button id="next-btn" class="hidden">Следующий вопрос</button>
        `;

        const optionsContainer = document.getElementById('options-container');
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <input type="radio" name="answer" id="option-${index}" value="${index + 1}">
                <label for="option-${index}">${option}</label>
            `;
            optionsContainer.appendChild(optionElement);
        });

        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', checkAnswer);

        const radioButtons = document.querySelectorAll('input[name="answer"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', function() {
                nextBtn.classList.remove('hidden');
            });
        });
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) {
            alert('Пожалуйста, выберите ответ!');
            return;
        }

        const userAnswer = parseInt(selectedOption.value);
        const isCorrect = userAnswer === quiz[currentQuestion].correctAnswer;
        
        userAnswers.push({
            question: quiz[currentQuestion].question,
            userAnswer: userAnswer,
            correctAnswer: quiz[currentQuestion].correctAnswer,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            score++;
        }

        currentQuestion++;
        showQuestion();
    }

    function showResult() {
        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreElement.textContent = score;
        
        answersDetails.innerHTML = '<h3>Детализация ответов:</h3>';
        
        userAnswers.forEach((answer, index) => {
            const answerDetail = document.createElement('div');
            answerDetail.className = `answer-detail ${answer.isCorrect ? 'correct' : 'incorrect'}`;
            answerDetail.textContent = `${index + 1}. ${answer.question} — Ваш ответ: ${answer.userAnswer}, Правильный ответ: ${answer.correctAnswer}`;
            answersDetails.appendChild(answerDetail);
        });
    }

    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        userAnswers = [];
        resultContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        startBtn.classList.remove('hidden');
        answersDetails.innerHTML = '';
    }
});