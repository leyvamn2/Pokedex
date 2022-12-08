const cokemonContainer = document.querySelector('.pokemon-container');
function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=> res.json())
    .then(data =>console.log(data))
}   

function fetchPokemons(number){
    for(let i=1;i<number;i++){
        fetchPokemon(i);
    }

}
fetchPokemons(9);