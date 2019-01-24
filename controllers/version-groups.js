const getData = require('../util/getData');
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
      res.render('version-groups/version-groups', {
        versionGroups: data.results,
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
      if(data.status === 404){
        res.render('search-error', {
           error:`Version Group with name ${versionGroupName} wasn't found.Make sure that your search parameters are correct`,
           path: '/search-error',
           title: 'Search Error',
         });
       }
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
