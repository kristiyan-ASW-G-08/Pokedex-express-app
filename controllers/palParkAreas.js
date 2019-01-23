const getData = require('../util/getData');
const getPokemonIdFromUrl = require('../util/getPokemonIdFromUrl');
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
      
      res.render('palParkAreas/palParkAreas', {
        palParkAreas:data.results,
        path: '/',
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
  console.log(palParkAreaName)
  const apiUrl = `https://pokeapi.co/api/v2/pal-park-area/${palParkAreaName}`;
  getData(apiUrl)
    .then(data => {
      if (data.status === 404) {
        res.render('search-error', {
          error: `Pal Park Area with name ${palParkAreaName} wasn't found.Make sure that your search parameters are correct`,
          path: '/search-error',
          title: 'Search Error'
        });
      }
      const pokemonEncounters  = data.pokemon_encounters.map(pokemon => {
        const pokemonId = getPokemonIdFromUrl(pokemon.url);;
          return {
              name:pokemon.pokemon_species.name,
              id:pokemonId,
              spriteFront:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
              baseScore:pokemon.base_score,
              rate:pokemon.rate
            
          }
      })
      const palParkArea = {
          name:data.name,
          pokemonEncounters
          
      }
      res.render('palParkAreas/palParkArea', {
        path: '/pal-park-area',
        title: data.name,
        palParkArea
      });
    })
    .catch(error => {
      throw error;
    });
};
