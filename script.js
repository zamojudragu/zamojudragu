const germanWords = ["Hallo", "Guten Tag", "Danke", "Bitte", "Tschüss"];
const croatianTranslations = ["Bok", "Dobar dan", "Hvala", "Molim", "Doviđenja"];

let currentIndex = 0;

function displayRandomWord() {
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.textContent = germanWords[currentIndex];
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const currentTranslation = croatianTranslations[currentIndex].toLowerCase();

    if (userInput === currentTranslation) {
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct answer is: ${currentTranslation}`);
    }

    currentIndex = (currentIndex + 1) % germanWords.length;
    displayRandomWord();
}

window.onload = displayRandomWord;
