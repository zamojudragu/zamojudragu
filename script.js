const germanWords = ["Das Auto", "Die Sonne", "Die Blume"]; // Add more German words

let currentWordIndex = 0;

function loadNextWord() {
    document.getElementById("german-word").innerText = germanWords[currentWordIndex];
    document.getElementById("user-input").value = "";
    document.getElementById("result-message").innerText = "";
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const croatianTranslation = getTranslation(germanWords[currentWordIndex]).toLowerCase();

    if (userInput === croatianTranslation) {
        document.getElementById("result-message").innerText = "Correct!";
    } else {
        document.getElementById("result-message").innerText = "Incorrect. Try again.";
    }

    currentWordIndex++;

    if (currentWordIndex === germanWords.length) {
        currentWordIndex = 0; // Restart if all words are done
    }

    loadNextWord();
}

function getTranslation(germanWord) {
    // You would replace this with a proper translation logic or API call
    // For simplicity, just returning the German word in uppercase here
    return germanWord.toUpperCase();
}

// Initial load
loadNextWord();
