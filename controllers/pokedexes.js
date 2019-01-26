const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/pokemon');
const renderFunctions2 = require('../renderFunctions/pokedexes');
exports.getPokedexes = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/pokedex/';
  }
  redisCache(apiUrl, res, next, renderFunctions2.pokedexesRender);
};
exports.getPokedex = (req, res, next) => {
  let { pokedexName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokedex/${pokedexName}/`;
  redisCache(apiUrl, res, next, renderFunctions.pokedexRender);
};