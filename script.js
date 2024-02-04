let currentWordIndex = 0;
let words;

// Fetch words from the JSON file
async function fetchWords() {
    const response = await fetch('words.json');
    words = await response.json();
    showNextWord();
}

// Display the next word
function showNextWord() {
    const germanWordElement = document.getElementById('german-word');
    germanWordElement.textContent = words[currentWordIndex].german;
    document.getElementById('user-input').value = '';
}

// Check user input against the correct answer
function checkAnswer() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const correctAnswer = words[currentWordIndex].croatian.toLowerCase();

    if (userInput === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect. Try again.');
    }

    // Move to the next word
    currentWordIndex++;
    if (currentWordIndex === words.length) {
        currentWordIndex = 0; // Loop back to the first word
    }

    showNextWord();
}

// Initialize the app
fetchWords();
