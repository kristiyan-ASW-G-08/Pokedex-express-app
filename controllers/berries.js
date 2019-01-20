const getData = require('../util/getData');
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
  getData(apiUrl)
    .then(data => {
      const stats = Object.entries(data).map(stat => {
        const value = stat[1];
        if (value) {
          if (typeof value === 'string' || typeof value === 'number') {
            const name = stat[0].split('_').join(' ');
            if (name !== 'name' && name !== 'id') {
              return {
                name,
                value
              };
            }
          }
        }
      });
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
    })
    .catch(error => {
      throw error;
    });
};
