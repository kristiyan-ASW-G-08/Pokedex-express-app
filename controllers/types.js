const getData = require('../util/getData');
const processPokemonList = require('../util/processPokemonList');
const displaySearchErrorPage = require('../util/displaySearchErrorPage');
const getStringValue = require('../util/getStringValue');
exports.getTypes = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/type/';
  }
  getData(apiUrl)
    .then(data => {
      res.render('list-page', {
        itemName: 'type',
        items: data.results,
        path: '/types',
        title: 'Types',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getType = (req, res, next) => {
  let { typeName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/type/${typeName}`;
  getData(apiUrl)
    .then(data => {
      displaySearchErrorPage(data.status, 'Type', typeName, res);
      const pokemonList = processPokemonList(data.pokemon);
      const damageRelations = Object.entries(data.damage_relations).map(
        damageRelation => {
          const editedDamageRelation = {};
          editedDamageRelation['name'] = damageRelation[0].split('_').join(' ');
          if (damageRelation[1].length !== 0) {
            editedDamageRelation['types'] = damageRelation[1];
            return editedDamageRelation;
          }
        }
      );
      res.render('types/type', {
        pokemonList,
        itemName: 'move',
        items: data.moves,
        path: '/type',
        damageRelations,
        title: data.name,
        type: data,
        previous: null,
        next: null
      });
    })
    .catch(error => {
      throw new Error(error);
    });
};
