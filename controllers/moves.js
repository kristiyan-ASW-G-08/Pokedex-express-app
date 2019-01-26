const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/moves');
exports.getMoves = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/move';
  }
  redisCache(apiUrl, res, next, renderFunctions.movesRender);
};
exports.getMove = (req, res, next) => {
  let { moveName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/move/${moveName}`;
  redisCache(apiUrl, res, next, renderFunctions.moveRender);
};
