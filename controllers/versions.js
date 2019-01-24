const getData = require('../util/getData');
const displaySearchErrorPage = require('../util/displaySearchErrorPage');
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
      res.render('versions/versions', {
        versions: data.results,
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
      displaySearchErrorPage(data.status, 'Version', versionName, res);

      res.render('versions/version', {
        path: '/version',
        title: data.name,
        version:data
      });
    })
    .catch(error => {
      throw error;
    });
};
