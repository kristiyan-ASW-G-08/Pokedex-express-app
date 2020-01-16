const getPokemonIdFromUrl = url => {
  const splitUrl = url.split("/");
  return splitUrl[splitUrl.length - 2];
};
module.exports = getPokemonIdFromUrl;
