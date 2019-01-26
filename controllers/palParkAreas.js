const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/palParkAreas');
exports.getPalParkAreas = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/pal-park-area/';
  }
  redisCache(apiUrl, res, next, renderFunctions.palParkAreasRender);
};
exports.getPalParkArea = (req, res, next) => {
  let { palParkAreaName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pal-park-area/${palParkAreaName}`;
  redisCache(apiUrl, res, next, renderFunctions.palParkAreaRender);
};
