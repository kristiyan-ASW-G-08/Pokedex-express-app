const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/versions");
const getApiUrl = require("../util/getApiUrl");
exports.getVersions = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "version");
  redisCache(apiUrl, res, next, renderFunctions.versionsRender);
};
exports.getVersion = (req, res, next) => {
  let { versionName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/version/${versionName}`;
  redisCache(apiUrl, res, next, renderFunctions.versionRender);
};
