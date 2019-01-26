const redisCache = require('../util/redisCache');
const renderFunctions = require('../renderFunctions/items');
exports.getItems = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/item';
  }
  redisCache(apiUrl, res, next, renderFunctions.itemsRender);
};
exports.getItem = (req, res, next) => {
  let { itemName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/item/${itemName}`;
  redisCache(apiUrl, res, next, renderFunctions.itemRender);
};
