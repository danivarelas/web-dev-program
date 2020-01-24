let id = localStorage.getItem('id');
let name = document.querySelector(".name");
let number = document.querySelector(".number");
let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let sprite = document.querySelector(".sprite");
let abilities = document.querySelector(".abilities");
let moves = document.querySelector(".moves");
let stats = document.querySelector(".stats");

getPokemonInfo(id);

function getPokemonInfo(id) {
    let pokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    pokemon.then(response => {
        return response.json()
    }).then(result => {
        name.innerHTML = result.name;
        name.style.textTransform = "capitalize";
        number.innerHTML = result.id;
        height.innerHTML = result.height;
        weight.innerHTML = result.weight;
        sprite.src = result.sprites.front_default;
        loadAbilities(result.abilities);
        loadStats(result.stats);
        loadMoves(result.moves);
    });
}

function loadAbilities(abilitiesList) {
    abilitiesList.forEach(ability => {
        let li = document.createElement("li");
        li.innerHTML = ability.ability.name;
        li.style.textTransform = "capitalize";
        abilities.appendChild(li);
    });
}

function loadStats(statsList) {
    statsList.forEach(stat => {
        let li = document.createElement("li");
        li.innerHTML = stat.stat.name + ": " + stat.base_stat;
        li.style.textTransform = "capitalize";
        stats.appendChild(li);
    });
}

function loadMoves(movesList) {
    for (var i = 0; i < 3; i++) {
        let randomMove = movesList[Math.floor(Math.random()*movesList.length)];
        let li = document.createElement("li");
        li.innerHTML = randomMove.move.name;
        li.style.textTransform = "capitalize";
        moves.appendChild(li);
    }
}