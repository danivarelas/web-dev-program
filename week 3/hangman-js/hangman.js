let words = ["house","listing","hangman","country","calendar","computer","programming","javascript"];
let gameWord = "";
let attempt = 0;
let succeededAttempts = 0;
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let state = document.getElementById("game-state");
let hiddenWord = document.querySelector(".hidden-word");
let alphabetDiv = document.querySelector(".alphabet");

function crateNewGame() {
    hiddenWord.innerHTML = "";
    alphabetDiv.innerHTML = "";
    state.src = 'images/0.svg';
    state.style.cursor = "pointer";
    state.addEventListener('click', startGame);
}

crateNewGame();

function startGame() {
    state.removeEventListener('click', startGame);
    state.style.cursor = "default";
    state.src = 'images/1.svg';
    createLetterButtons();
    gameWord = chooseWord();
    let letters = gameWord.split("");
    letters.forEach((letter,i) => {
        var node = document.createElement("span");
        node.innerHTML = " _ ";
        node.className = "large-bold-text";
        node.id = "letter_" + i;
        hiddenWord.appendChild(node);
    });
    attempt = 1;
    succeededAttempts = 0;
}

function chooseWord() {
    var random = Math.floor(Math.random() * words.length);
    let word = words[random];
    return word;
}

function selectLetter() {
    this.style.display = "none";
    if (checkIfLetterExists(this.value)) {
        successAttempt(win);
    } else {
        failAttempt(lose);
    }
}

function successAttempt(callback) {
    if (succeededAttempts < gameWord.length) {
        console.log(succeededAttempts + " out of " + gameWord.length);
    } else {
        callback();
        crateNewGame();
    }
}

function failAttempt(callback) {
    if (attempt < 11) {
        attempt++;
        state.src = 'images/'+attempt+'.svg';
    } else {
        callback();
        crateNewGame();
    }
}

function win () {
        alert("Congratulations! You won the game!");
}

function lose () {
        alert("Too bad! You lost the game!");
}

function createLetterButtons() {
    alphabet.forEach(letter => {
        var button = document.createElement("button");
        button.innerHTML = letter;
        button.className = "letter large-bold-text";
        button.id = "letter_" + letter;
        button.value = letter;
        button.addEventListener('click', selectLetter);
        alphabetDiv.appendChild(button);
    });
    
}

function checkIfLetterExists(testLetter) {
    let letters = gameWord.split("");
    let exists = false;
    letters.forEach((letter,i) => {
        if (letter === testLetter) {
            let guessed = document.getElementById("letter_" + i);
            guessed.innerHTML = letter;
            succeededAttempts++;
            exists = true;
        }
    });
    return exists;
}