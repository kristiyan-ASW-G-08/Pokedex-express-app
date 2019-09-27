const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/pokemon");
const getApiUrl = require("../util/getApiUrl");
exports.getPokedex = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "pokemon");
  redisCache(apiUrl, res, next, renderFunctions.pokedexRender);
};
exports.getPokemon = (req, res, next) => {
  let { pokemonName } = req.params;
  console.log(pokemonName);
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  redisCache(apiUrl, res, next, renderFunctions.pokemonRender);
};
