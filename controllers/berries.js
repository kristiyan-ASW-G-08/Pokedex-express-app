const getData = require('../util/getData');
const getStringValue = require('../util/getStringValue');
const error = require('../util/error')
exports.getBerries = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/berry/';
  }
  getData(apiUrl)
    .then(data => {
      res.render('list-page', {
        itemName:'berry',
        items: data.results,
        path: '/berries',
        title: 'Berries',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getBerry = (req, res, next) => {
  let { berryName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/berry/${berryName}`;
  console.log(apiUrl);
  getData(apiUrl)
    .then(data => {
      const stats = getStringValue(data);
      const berry = {
        name: data.name,
        id: data.id,
        flavors: data.flavors,
        stats
      };
      res.render('berries/berry', {
        path: '/berry',
        title: data.name,
        berry
      });
    })
    .catch(err => {
      error(err)
    });
};
