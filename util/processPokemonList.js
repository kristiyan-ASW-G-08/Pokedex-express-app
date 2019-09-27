const getPokemonIdFromUrl = require("./getPokemonIdFromUrl");
const processPokemonListData = pokemonList => {
  const processedPokemonList = pokemonList.map(pokemon => {
    const editedPokemon = Object.assign({}, pokemon);
    editedPokemon["id"] = getPokemonIdFromUrl(pokemon.url);
    editedPokemon[
      "spriteFront"
    ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${editedPokemon.id}.png`;

    return editedPokemon;
  });
  return processedPokemonList;
};
module.exports = processPokemonListData;
