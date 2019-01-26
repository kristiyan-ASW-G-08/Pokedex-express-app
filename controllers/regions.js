const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/regions');
exports.getRegions = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/region/';
  }
  redisCache(apiUrl, res, next, renderFunctions.regionsRender);
};
exports.getRegion = (req, res, next) => {
  let { regionName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/region/${regionName}`;
  redisCache(apiUrl, res, next, renderFunctions.regionRender);
};
