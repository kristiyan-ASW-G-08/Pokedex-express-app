const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/types");
const getApiUrl = require("../util/getApiUrl");
exports.getTypes = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "type");
  redisCache(apiUrl, res, next, renderFunctions.typesRender);
};
exports.getType = (req, res, next) => {
  let { typeName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/type/${typeName}`;
  redisCache(apiUrl, res, next, renderFunctions.typeRender);
};
