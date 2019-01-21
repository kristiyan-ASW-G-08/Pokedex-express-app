const getData = require('../util/getData');
exports.getItems = (req, res, next) => {
  let apiUrl;
  const { nextPage } = req.body;
  const { previousPage } = req.body;
  if (nextPage) {
    apiUrl = nextPage;
  } else if (previousPage) {
    apiUrl = previousPage;
  } else {
    apiUrl = 'https://pokeapi.co/api/v2/item';
  }
  getData(apiUrl)
    .then(data => {
      
       const items = data.results.map(item => {
           item['sprite'] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`
       }) 
      res.render('items/items', {
        items: data.results,
        path: '/items',
        title: 'Items',
        previous: data.previous,
        next: data.next
      });
    })
    .catch(error => {
      throw error;
    });
};
exports.getItem = (req, res, next) => {
  let { itemName } = req.params;
  const apiUrl = `https://pokeapi.co/api/v2/item/${itemName}`;
  getData(apiUrl)
    .then(data => {
      if(data.status === 404){
        res.render('search-error', {
           error:`Item with name ${itemName} wasn't found.Make sure that your search parameters are correct`,
           path: '/search-error',
           title: 'Search Error',
         });
       }
      res.render('items/item', {
        path: '/pokemon',
        title: data.name,
        data
      });
    })
    .catch(error => {
      throw error;
    });
};
