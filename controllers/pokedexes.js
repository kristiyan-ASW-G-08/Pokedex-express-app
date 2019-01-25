const getData = require('../util/getData');
const processPokemonList = require('../util/processPokemonList');
const displaySearchErrorPage = require('../util/displaySearchErrorPage');
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
      res.render('pokedexes/pokedexes', {
        pokedexes:data.results,
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
      displaySearchErrorPage(data.status, 'Pokedex', pokedexName, res);
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
    .catch(error => {
      throw error;
    });
};
