const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/generations");
const getApiUrl = require("../util/getApiUrl");
exports.getGenerations = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "generation");
  redisCache(apiUrl, res, next, renderFunctions.generationsRender);
};
exports.getGeneration = (req, res, next) => {
  let { generationName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/generation/${generationName}`;
  redisCache(apiUrl, res, next, renderFunctions.generationRender);
};
