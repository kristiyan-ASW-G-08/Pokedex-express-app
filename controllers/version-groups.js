const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/versionGroups");
const getApiUrl = require("../util/getApiUrl");
exports.getVersionGroups = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "version-group");
  redisCache(apiUrl, res, next, renderFunctions.versionGroupsRender);
};
exports.getVersionGroup = (req, res, next) => {
  let { versionGroupName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/version-group/${versionGroupName}`;
  redisCache(apiUrl, res, next, renderFunctions.versionGroupRender);
};
