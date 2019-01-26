const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/generations');
exports.getGenerations = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/generation/';
  }
  redisCache(apiUrl, res, next, renderFunctions.generationsRender);
};
exports.getGeneration = (req, res, next) => {
  let { generationName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/generation/${generationName}`;
  redisCache(apiUrl, res, next, renderFunctions.generationRender);
};
