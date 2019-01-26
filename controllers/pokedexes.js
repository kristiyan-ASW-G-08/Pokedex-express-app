const getData = require('../util/getData');
const processPokemonList = require('../util/processPokemonList');
const error = require('../util/error')
exports.getPokedexes = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/pokedex/';
  }
  getData(apiUrl)
    .then(data => {
      res.render('list-page', {
        itemName:'pokedex',
        items: data.results,
        path: '/pokedexes',
        title: 'Pokedexes',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getPokedex = (req, res, next) => {
  let { pokedexName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokedex/${pokedexName}/`;
  getData(apiUrl)
    .then(data => {
      const pokemonList = processPokemonList(data.pokemon_entries)
      res.render('pokedexes/pokedex', {
        path: '/pokedex',
        title: data.name,
        pokemonList,
        pokedexName:data.name,
        previous: data.previous,
        next: data.next
      });
    })
    .catch(err => {
      error(err)
    });
};
