const getData = require('../util/getData');
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
      res.render('regions/regions', {
        regions: data.results,
        path: '/regions',
        title: 'regions',
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
      if(data.status === 404){
        res.render('search-error', {
           error:`Region with name ${regionName} wasn't found.Make sure that your search parameters are correct`,
           path: '/search-error',
           title: 'Search Error',
         });
       }
      res.render('regions/region', {
        path: '/region',
        title: data.name,
        region:data
      });
    })
    .catch(error => {
      throw error;
    });
};
