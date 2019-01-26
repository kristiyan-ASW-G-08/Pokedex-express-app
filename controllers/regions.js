const getData = require('../util/getData');
const error = require('../util/error')
exports.getRegions = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/region/';
  }
  getData(apiUrl)
    .then(data => {
      res.render('list-page', {
        itemName:'region',
        items: data.results,
        path: '/regions',
        title: 'Regions',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getRegion = (req, res, next) => {
  let { regionName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/region/${regionName}`;
  getData(apiUrl)
    .then(data => {
      res.render('regions/region', {
        path: '/region',
        title: data.name,
        region:data
      });
    })
    .catch(err => {
      error(err)
    });
};
