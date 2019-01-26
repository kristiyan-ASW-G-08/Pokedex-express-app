const getStringValue = require('../util/getStringValue')
const pokedexesRender = (data,res) => {
    res.render('list-page', {
        itemName:'pokedex',
        items: data.results,
        path: '/pokedexes',
        title: 'Pokedexes',
        previous: data.previous,
        next: data.next
      });
}


const renderFunctions = {
    pokedexesRender,
 
}
module.exports = renderFunctions