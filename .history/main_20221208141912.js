const cokemonContainer = document.querySelector('.pokemon-container');
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=> res.json())
    .log(data =>console.log(data))
}
fetchPokemon(1);