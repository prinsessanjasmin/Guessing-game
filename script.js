const guessBox = document.querySelector('.guess-box');
const gameForm = document.querySelector('#game-form');
const btn = document.querySelector('.btn');
const feedbackDiv = document.querySelector('.feedback-div');
let numberOfGuesses = 0;

const correctAnswer = Math.round(Math.random() * 100); 
console.log(correctAnswer);

gameForm.addEventListener('submit', reviewAnswer, false);
    
function reviewAnswer(event) {
    event.preventDefault();

    let value = Number(guessBox.value); 
    guessBox.value = '';
    let response;

    if (value > 100 || value < 1) {
        response = "Choose a number between 1 and 100";
    }
    else if (value < correctAnswer) {
        numberOfGuesses++;
        response = `Guess #${numberOfGuesses}: ${value} is too low!`;
    } else if (value > correctAnswer) {
        numberOfGuesses++;
        response = `Guess #${numberOfGuesses}: ${value} is too high!`;
    } else {
        numberOfGuesses++;
        response = `Good job! ${value} is the correct number. You made it using only ${numberOfGuesses} guesses!`;
    }
    
    createFeedback(response);
}

function createFeedback (response) {
    let feedbackText = document.createElement('p'); 
    feedbackText.classList.add('feedback');
    feedbackText.textContent = response; 
    feedbackDiv.appendChild(feedbackText);
}