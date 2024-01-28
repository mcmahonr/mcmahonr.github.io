document.addEventListener('DOMContentLoaded', function () {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetContainer = document.getElementById('alphabet-buttons');
    let word = '';

    alphabet.split('').forEach(function (letter) {
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'col-4 text-center'; // Bootstrap grid class

        const button = document.createElement('button');
        button.className = 'btn btn-secondary btn-lg btn-block'; // Larger Bootstrap button
        button.textContent = letter;
        button.onclick = function () {
            word += letter;
            document.getElementById('word-display').textContent = word;
        };

        buttonDiv.appendChild(button);
        alphabetContainer.appendChild(buttonDiv);
    });

    document.getElementById('speak-button').onclick = function () {
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    };
});
