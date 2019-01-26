const renderFunctions  = require('../renderFunctions/berries')
const redisCache = require('../util/redisCache');
exports.getBerries = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/berry/';
  }
  redisCache(apiUrl, res, next, renderFunctions.berriesRender);
  
};
exports.getBerry = (req, res, next) => {
  let { berryName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/berry/${berryName}`;
  redisCache(apiUrl, res, next, renderFunctions.berryRender);
};
