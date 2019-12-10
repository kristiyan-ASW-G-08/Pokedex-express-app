const getApiUrl = (nextPage, previousPage, resource) => {
  if (nextPage) {
    return nextPage;
  } else if (previousPage) {
    return previousPage;
  } else {
    return `https://pokeapi.co/api/v2/${resource}/`;
  }
};
module.exports = getApiUrl;
