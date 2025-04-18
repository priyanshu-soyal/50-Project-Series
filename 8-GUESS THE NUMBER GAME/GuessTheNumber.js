let randomNumber = parseInt(Math.random() * 100 + 1); 

const submitBtn = document.getElementById('submitBtn');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultparas");

let preGuess = [];
let attemps = 1;
let playGame = true;

if (playGame) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let guessNum = parseInt(userInput.value);
        validateGuess(guessNum);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else  if (guess < 1) {
        alert("Please enter a number greater than 1")
    } 
    else  if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        preGuess.push(guess);
        if (attemps === 10) {
            displayGuess(guess);
            displayMsg(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    attemps++;
    remaining.innerHTML = `${11 - attemps}`;
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg(`Congratulations! You won.`);
        endGame();
    } else if (guess < randomNumber) {
        displayMsg(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMsg(`Number is too high`);
    }
    
}

function displayMsg(msg) {
    lowOrHigh.innerHTML = `<h2> ${msg} </h2>`
    // lowOrHigh.innerHTML = ` ${msg} `
}

let btn = document.createElement('button');

function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    btn.classList.add("button");
    btn.innerHTML = `<h2 id = "startNewGame"> Start new game </h2>`;
    startOver.appendChild(btn);
    playGame = false;
    newGame();
}
function newGame() {
    let startNewGameBtn = document.getElementById("startNewGame");
    startNewGameBtn.addEventListener("click", () => {
        displayMsg(``);
        randomNumber = parseInt(Math.random() * 100 + 1);
        preGuess = [];
        attemps = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - attemps}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(btn);
        playGame = true;
    })
}


