const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/pokemon");
const renderFunctions2 = require("../renderFunctions/pokedexes");
const getApiUrl = require("../util/getApiUrl");
exports.getPokedexes = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "pokedex");
  redisCache(apiUrl, res, next, renderFunctions2.pokedexesRender);
};
exports.getPokedex = (req, res, next) => {
  let { pokedexName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokedex/${pokedexName}/`;
  redisCache(apiUrl, res, next, renderFunctions.pokedexRender);
};
