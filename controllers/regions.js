const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/regions");
const getApiUrl = require("../util/getApiUrl");
exports.getRegions = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "region");
  redisCache(apiUrl, res, next, renderFunctions.regionsRender);
};
exports.getRegion = (req, res, next) => {
  let { regionName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/region/${regionName}`;
  redisCache(apiUrl, res, next, renderFunctions.regionRender);
};
