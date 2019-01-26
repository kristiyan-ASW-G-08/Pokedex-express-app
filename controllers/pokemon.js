const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/pokemon');
exports.getPokedex = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }
  redisCache(apiUrl, res, next, renderFunctions.pokedexRender);
};
exports.getPokemon = (req, res, next) => {
  let { pokemonName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  redisCache(apiUrl, res, next, renderFunctions.pokemonRender);
};
