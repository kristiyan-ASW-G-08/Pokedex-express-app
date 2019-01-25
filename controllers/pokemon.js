const getData = require('../util/getData');
const processPokemonList = require('../util/processPokemonList');
const displaySearchErrorPage = require('../util/displaySearchErrorPage');
exports.getPokedex = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }
  getData(apiUrl)
    .then(data => {
     const pokemonList = processPokemonList(data.results)
      res.render('pokedexes/pokedex', {
        pokemonList,
        path: '/',
        title: 'Pokedex',
        pokedexName: null,
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getPokemon = (req, res, next) => {
  let { pokemonName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  getData(apiUrl)
    .then(data => {
      displaySearchErrorPage(data.status, 'Pokemon', pokemonName, res);
      const stats = data.stats.map(info => {
        return {
          statValue: info.base_stat,
          statName: info.stat.name
        };
      });
      const sprites = Object.entries(data.sprites).map(sprite => {
        const spriteName = sprite[0].split('_').join(' ');
        if (sprite[1]) {
          return {
            spriteName,
            sprite: sprite[1]
          };
        }
      });
      data.stats = stats;
      data.defaultSprite = data.sprites.front_default;
      data.sprites = sprites;
      res.render('pokemon/pokemon', {
        path: '/pokemon',
        title: data.name,
        pokemon: data
      });
    })
    .catch(error => {
      throw error;
    });
};
