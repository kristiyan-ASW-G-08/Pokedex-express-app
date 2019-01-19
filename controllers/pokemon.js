const getData = require('../util/getData');
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
  getData(apiUrl).then(data => {
    const pokedex = data.results.map(pokemon => {
      const splitUrlArr = pokemon.url.split('/');
      const pokemonIdNum = splitUrlArr.length - 2;
      const pokemonId = splitUrlArr[pokemonIdNum];
      const spriteFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
      pokemon['spriteFront'] = spriteFront;
      pokemon['id'] = pokemonId;
      return pokemon;
    });
    res.render('pokedex', {
      pokedex,
      path: '/',
      title: 'Pokedex',
      previous: data.previous,
      next: data.next
    });
  })
  .catch(error => {
    throw error
  })
};
exports.getPokemon = (req, res, next) => {
  let {pokemonName} = req.params;
  if(!pokemonName){
   pokemonName = req.body.pokemonName
  }
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  getData(apiUrl)
  .then(data => {
    const stats = data.stats.map(info => {
      return {
        statValue:info.base_stat,
        statName:info.stat.name
      }
    });
    data.stats = stats
    res.render('pokemon', {
      path: '/pokemon',
      title: data.name,
      pokemon:data
    });
  })
  .catch(error => {
    throw error
  })
};
