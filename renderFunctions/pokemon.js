const processPokemonList = require('../util/processPokemonList');
const pokemonRender = (data, res) => {
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
};

const pokedexRender = (data, res) => {
  let pokemonList;
  if (data.pokemon_entries) {
    pokemonList = processPokemonList(data.pokemon_entries);
  } else {
    pokemonList = processPokemonList(data.results);
  }
  res.render('pokedexes/pokedex', {
    pokemonList,
    path: '/',
    title: 'Pokedex',
    pokedexName: null,
    previous: data.previous,
    next: data.next
  });
};
const renderFunctions = {
  pokemonRender,
  pokedexRender
};
module.exports = renderFunctions;
