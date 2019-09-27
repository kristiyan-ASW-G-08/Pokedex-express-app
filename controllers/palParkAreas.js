const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/palParkAreas");
const getApiUrl = require("../util/getApiUrl");
exports.getPalParkAreas = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "pal-park-area");
  redisCache(apiUrl, res, next, renderFunctions.palParkAreasRender);
};
exports.getPalParkArea = (req, res, next) => {
  let { palParkAreaName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pal-park-area/${palParkAreaName}`;
  redisCache(apiUrl, res, next, renderFunctions.palParkAreaRender);
};
