document.addEventListener("DOMContentLoaded", () => {
    const pokemonCard = document.getElementById("pokemonCard")
    const pokemonCharacterSelect = document.getElementBy("pokemonCharacter");


    pokemonCharacterSelect.addEventListener("change", () => {
        const selectedCategory = pokemonCharacterSelect.value;
        fetchPokemons(selectedCharacter);
    });

    async function fetchPokemons(chracter) {
        const apiURL = `https://pokeapi.co/api/v2/pokemon"`;
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayPokemons(data.pokemon_species);

        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    }

    function displayPokemons(pokemonList) {
        pokemonCard.innerHTML = "";
        pokemonList.forEach(pokemon => {
            const pokemonDiv = document.createElement("div");
            pokemonDiv.textContent = pokemon.name;
            pokemonCard.appendChild(pokemonDiv);
        });
    }
    fetchPokemons(1);
});
const url = "https://pokeapi.co/api/v2/pokemon"
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}
function doStuff(data) {
    results = data;
    console.log('first: ', results);
    results.results.forEach((pokemon) => {
        const div = document.createElement('div');
        div.textContent = pokemon.name;
        document.querySelector('main').appendChild(div);
        // assumes you have a <main> element in your HTML document
    });
}