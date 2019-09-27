const getApiUrl = (nextPage, previousPage, resource) => {
  let apiUrl;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = `https://pokeapi.co/api/v2/${resource}/`;
  }
  return apiUrl;
};
module.exports = getApiUrl;
