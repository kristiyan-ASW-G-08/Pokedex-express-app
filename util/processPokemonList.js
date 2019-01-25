const getPokemonIdFromUrl = require('./getPokemonIdFromUrl')
const processPokemonListData = pokemonList => {
    const processedPokemonList = pokemonList.map(pokemon => {
        const editedPokemon = {}
        let pokemonId
        if(!pokemon.name && !pokemon.pokemon){
            editedPokemon['name'] = pokemon.pokemon_species.name
            pokemonId = getPokemonIdFromUrl(pokemon.pokemon_species.url)
        }else if(pokemon.pokemon){
            editedPokemon['name'] = pokemon.pokemon.name
            pokemonId = getPokemonIdFromUrl(pokemon.pokemon.url)
        }
        else{
            pokemonId = getPokemonIdFromUrl(pokemon.url);
            editedPokemon['name'] = pokemon.name
        }
        const spriteFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
        editedPokemon['id'] = pokemonId;
        editedPokemon['spriteFront'] = spriteFront;

        return editedPokemon;
      });
      return processedPokemonList
}
module.exports = processPokemonListData