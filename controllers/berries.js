const getData = require('../util/getData');
const getStringValue = require('../util/getStringValue');
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
      res.render('berries/berries', {
        berries: data.results,
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
  console.log(apiUrl)
  getData(apiUrl)
    .then(data => {
      if(data.status === 404){
       res.render('search-error', {
          error:`Berry with name ${berryName} wasn't found.Make sure that your search parameters are correct`,
          path: '/search-error',
          title: 'Search Error',
        });
      }
        const stats = getStringValue(data)
        const berry = {
          name: data.name,
          id: data.id,
          flavors: data.flavors,
          stats
        };
        res.render('berries/berry', {
          path: '/pokemon',
          title: data.name,
          berry
        });
      }
    )
    .catch(error => {
      throw error;
    });
};
