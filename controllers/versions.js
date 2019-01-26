const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/versions');
exports.getVersions = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/version/';
  }
  redisCache(apiUrl, res, next, renderFunctions.versionsRender);
};
exports.getVersion = (req, res, next) => {
  let { versionName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/version/${versionName}`
  redisCache(apiUrl, res, next, renderFunctions.versionRender);
};