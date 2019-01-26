const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/types');
exports.getTypes = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/type/';
  }
  redisCache(apiUrl, res, next, renderFunctions.typesRender);
};
exports.getType = (req, res, next) => {
  let { typeName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/type/${typeName}`;
  redisCache(apiUrl, res, next, renderFunctions.typeRender);
};
