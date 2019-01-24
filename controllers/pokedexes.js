const getData = require('../util/getData');
const getPokemonIdFromUrl = require('../util/getPokemonIdFromUrl');
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
      if (data.status === 404) {
        res.render('search-error', {
          error: `Pokedex with name ${pokedexName} wasn't found.Make sure that your search parameters are correct`,
          path: '/search-error',
          title: 'Search Error'
        });
      }
      const pokedex = data.pokemon_entries.map(pokemon => {
            const pokemonId = getPokemonIdFromUrl(pokemon.pokemon_species.url);
            const spriteFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            const editedPokemon  = {}
            editedPokemon['name'] = pokemon.pokemon_species.name
            editedPokemon['id'] = pokemonId
            editedPokemon['spriteFront'] = spriteFront;
            return editedPokemon;
          ;
      })
      res.render('pokemon/pokedex', {
        path: '/pokedex',
        title: data.name,
        pokedex,
        pokedexName:data.name,
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
