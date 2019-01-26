const getData = require('../util/getData');
const error = require('../util/error')
exports.getVersions = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/version/';
  }
  getData(apiUrl)
    .then(data => {
      res.render('list-page', {
        itemName:'version',
        items: data.results,
        path: '/versions',
        title: 'Versions',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getVersion = (req, res, next) => {
  let { versionName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/version/${versionName}`
  getData(apiUrl)
    .then(data => {
      res.render('versions/version', {
        path: '/version',
        title: data.name,
        version:data
      });
    })
    .catch(err => {
      error(err)
    });
};
