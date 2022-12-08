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
function createPokemon(pokemon){
    const card= document.createElement('div');
    card.classList.add('pokemon-block');
    const spriteContainer=document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite=document.createElement('img');
    sprite.src=pokemon.sprites.front_default
}