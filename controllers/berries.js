const renderFunctions = require("../renderFunctions/berries");
const redisCache = require("../util/redisCache");
const getApiUrl = require("../util/getApiUrl");
exports.getBerries = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "berry");
  redisCache(apiUrl, res, next, renderFunctions.berriesRender);
};
exports.getBerry = (req, res, next) => {
  let { berryName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/berry/${berryName}`;
  redisCache(apiUrl, res, next, renderFunctions.berryRender);
};
