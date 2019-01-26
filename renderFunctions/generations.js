const getPokemonIdFromUrl = require('../util/getPokemonIdFromUrl');

const generationsRender = (data, res) => {
  res.render('list-page', {
    itemName: 'generation',
    items: data.results,
    path: '/generations',
    title: 'Generations',
    previous: data.previous,
    next: data.next
  });
};
const generationRender = (data, res) => {
  const pokemon_species = data.pokemon_species.map(pokemon => {
    const pokemonId = getPokemonIdFromUrl(pokemon.url);
    const spriteFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
    pokemon['id'] = pokemonId;
    pokemon['spriteFront'] = spriteFront;

    return pokemon;
  });
  res.render('generations/generation', {
    path: '/generation',
    title: data.name,
    generation: data
  });
};
const renderFunctions = {
  generationsRender,
  generationRender
};
module.exports = renderFunctions;
