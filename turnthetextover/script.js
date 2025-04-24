document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const reverseBtn = document.getElementById('reverse-btn');
    const resultDiv = document.getElementById('result');
    const reversedTextSpan = document.getElementById('reversed-text');

    reverseBtn.addEventListener('click', function() {
        const text = userInput.value.trim();
        
        if (text) {
            const reversedText = reverseString(text);
            reversedTextSpan.textContent = reversedText;
            resultDiv.classList.remove('hidden');
        } else {
            alert('Пожалуйста, введите текст для переворота!');
        }
    });

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
});