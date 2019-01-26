const getData = require('../util/getData');
const processPokemonList = require('../util/processPokemonList');
const error = require('../util/error')
exports.getPalParkAreas = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/pal-park-area/';
  }
  getData(apiUrl)
    .then(data => {
      
      res.render('list-page', {
        itemName:'pal-park-area',
        items: data.results,
        path: '/pal-park-areas',
        title: 'Pal Park Areas',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getPalParkArea = (req, res, next) => {
  let { palParkAreaName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pal-park-area/${palParkAreaName}`;
  getData(apiUrl)
    .then(data => {

      const pokemonList  =processPokemonList(data.pokemon_encounters)
      res.render('palParkAreas/palParkArea', {
        path: '/pal-park-area',
        title: data.name,
        pokemonList,
        palParkAreaName : data.name
      });
    })
    .catch(err => {
      error(err)
    });
};
