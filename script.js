document.addEventListener('DOMContentLoaded', function () {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetContainer = document.getElementById('alphabet-buttons');
    const wordDisplay = document.getElementById('word-display');
    let word = '';

    alphabet.split('').forEach(function (letter) {
        const button = document.createElement('button');
        button.textContent = letter;
        button.onclick = function () {
            word += letter;
            wordDisplay.textContent = word;
        };
        alphabetContainer.appendChild(button);
    });

    document.getElementById('speak-button').onclick = function () {
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    };
});
