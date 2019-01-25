const getData = require('../util/getData');
const displaySearchErrorPage = require('../util/displaySearchErrorPage');
exports.getVersionGroups = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/version-group/';
  }
  getData(apiUrl)
    .then(data => {
      res.render('list-page', {
        itemName:'version-group',
        items: data.results,
        path: '/version-groups',
        title: 'Version Groups',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getVersionGroup = (req, res, next) => {
  let { versionGroupName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/version-group/${versionGroupName}`;
  getData(apiUrl)
    .then(data => {
      displaySearchErrorPage(data.status, 'Version Group', versionGroupName, res);
      res.render('version-groups/version-group', {
        path: '/version-group',
        title: data.name,
        versionGroup:data
      });
    })
    .catch(error => {
      throw error;
    });
};
