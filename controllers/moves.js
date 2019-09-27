const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/moves");
const getApiUrl = require("../util/getApiUrl");
exports.getMoves = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "move");
  redisCache(apiUrl, res, next, renderFunctions.movesRender);
};
exports.getMove = (req, res, next) => {
  let { moveName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/move/${moveName}`;
  redisCache(apiUrl, res, next, renderFunctions.moveRender);
};
