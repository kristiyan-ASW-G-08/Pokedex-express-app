const getData = require('../util/getData');
const getStringValue = require('../util/getStringValue');
const displaySearchErrorPage = require('../util/displaySearchErrorPage');
exports.getTypes = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/type/';
  }
  getData(apiUrl)
    .then(data => {
      res.render('types/types', {
        types: data.results,
        path: '/types',
        title: 'Types',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getType = (req, res, next) => {
  let { typeName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/type/${typeName}`;
  console.log(apiUrl);
  getData(apiUrl)
    .then(data => {
      displaySearchErrorPage(data.status, 'Type', typeName, res);
      res.render('types/type', {
        path: '/type',
        title: data.name,
        type:data
      });
    })
    .catch(error => {
      throw error;
    });
};
