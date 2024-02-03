const words = [
    { german: 'Guten Tag', croatian: 'Dobar dan' },
    { german: 'Apfel', croatian: 'Jabuka' },
    // Add more words as needed
];

let currentWordIndex = 0;

function displayNextWord() {
    if (currentWordIndex < words.length) {
        document.getElementById('german-word').innerText = words[currentWordIndex].german;
        document.getElementById('user-input').value = '';
        document.getElementById('result').innerText = '';
    } else {
        document.getElementById('german-word').innerText = 'Congratulations! You finished the words.';
        document.getElementById('user-input').style.display = 'none';
    }
}

function checkTranslation() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const correctTranslation = words[currentWordIndex].croatian.toLowerCase();

    if (userInput === correctTranslation) {
        document.getElementById('result').innerText = 'Correct!';
        currentWordIndex++;
        displayNextWord();
    } else {
        document.getElementById('result').innerText = 'Incorrect. Try again.';
    }
}

// Initialize the app
displayNextWord();
