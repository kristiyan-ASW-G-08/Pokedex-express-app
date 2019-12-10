const getPokemonIdFromUrl = url => {
  const pokemonIdNum = url.split("/").length - 2;
  return splitUrlArr[pokemonIdNum];
};
module.exports = getPokemonIdFromUrl;
