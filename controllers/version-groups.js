const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/versionGroups');
exports.getVersionGroups = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/version-group/';
  }
  redisCache(apiUrl, res, next, renderFunctions.versionGroupsRender);
  
};
exports.getVersionGroup = (req, res, next) => {
  let { versionGroupName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/version-group/${versionGroupName}`;
  redisCache(apiUrl, res, next, renderFunctions.versionGroupRender);
};
