const redisCache = require("../util/redisCache");
const renderFunctions = require("../renderFunctions/items");
const getApiUrl = require("../util/getApiUrl");
exports.getItems = (req, res, next) => {
  const { nextPage, previousPage } = req.body;
  const apiUrl = getApiUrl(nextPage, previousPage, "item");
  redisCache(apiUrl, res, next, renderFunctions.itemsRender);
};
exports.getItem = (req, res, next) => {
  let { itemName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/item/${itemName}`;
  redisCache(apiUrl, res, next, renderFunctions.itemRender);
};
