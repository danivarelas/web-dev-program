//let id = localStorage.getItem('id');
let name = document.querySelector(".name");
let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let sprite = document.querySelector(".sprite");
let abilities = document.querySelector(".abilities");
let moves = document.querySelector(".moves");
let stats = document.querySelector(".stats");

getPokemonInfo(1);

function getPokemonInfo(id) {
    let pokemon = fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    pokemon.then(response => {
        return response.json()
    }).then(result => {
        name.innerHTML = result.name;
        height.innerHTML = result.height;
        weight.innerHTML = result.weight;
        sprite.src = result.sprites.front_default;
        loadAbilities(result.abilities);
        loadStats(result.stats);
    });
}

function loadAbilities(abilitiesList) {
    abilitiesList.forEach(ability => {
        let li = document.createElement("li");
        li.innerHTML = ability.ability.name;
        abilities.appendChild(li);
    });
}

function loadStats(statsList) {
    statsList.forEach(stat => {
        let li = document.createElement("li");
        li.innerHTML = stat.stat.name + " - " + stat.base_stat;
        stats.appendChild(li);
    });
}