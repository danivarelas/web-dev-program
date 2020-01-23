let words = ["house","listing","hangman","country","calendar","computer","programming","javascript"];
let gameWord = "";
let attempt = 0;
let succeededAttempts = 0;
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let state = document.getElementById("game-state");
let hiddenWord = document.querySelector(".hidden-word");
let alphabetDiv = document.querySelector(".alphabet");
let finishText = document.querySelector(".finish-text");
let buttonsContainer = document.querySelector(".buttons-container");
let btnPokemon = document.getElementById("btnPokemon");
let btnPlay = document.getElementById("btnPlay");

function getPokemon(id) {
    let pokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    pokemon.then(response => {
        return response.json()
    }).then(result => {
        gameWord = result.name;
        let letters = gameWord.split("");
        letters.forEach((letter,i) => {
            var node = document.createElement("span");
            node.innerHTML = " _ ";
            node.className = "large-bold-text";
            node.id = "letter_" + i;
            hiddenWord.appendChild(node);
        });
    });
}

function crateNewGame() {
    hiddenWord.innerHTML = "";
    alphabetDiv.innerHTML = "";
    btnPlay.addEventListener('click', crateNewGame);
    btnPokemon.style.display = "inline-block";
    buttonsContainer.style.display = "none";
    finishText.style.display = "none";
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
    chooseWord();
    attempt = 1;
    succeededAttempts = 0;
}

function chooseWord() {
    let id = Math.floor(Math.random() * 807) + 1;
    localStorage.setItem('id', id);
    getPokemon(id);
}

function selectLetter() {
    this.style.display = "none";
    if (checkIfLetterExists(this.value)) {
        successAttempt();
    } else {
        failAttempt();
    }
}

function successAttempt() {
    if (succeededAttempts < gameWord.length) {
        console.log(succeededAttempts + " out of " + gameWord.length);
    } else {
        win();
    }
}

function failAttempt() {
    if (attempt < 11) {
        attempt++;
        state.src = 'images/'+attempt+'.svg';
    } else {
        lose();
    }
}

function win () {
    buttonsContainer.style.display = "inline";
    finishText.style.display = "inline";
    finishText.style.color = "green";
    finishText.innerHTML = "Congratulations! You won the game!";
}

function lose () {
    buttonsContainer.style.display = "inline";
    btnPokemon.style.display = "none";
    finishText.style.display = "inline";
    finishText.style.color = "red";
    finishText.innerHTML = "Too bad! Try again!";
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

function openWin() {
    location.href = "pokemon.html";
}