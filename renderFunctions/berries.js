const getStringValue = require('../util/getStringValue')
const berryRender = (data,res) => {
    console.log(data)
    const stats = getStringValue(data);
    const berry = {
      name: data.name,
      id: data.id,
      flavors: data.flavors,
      stats
    };
    res.render('berries/berry', {
      path: '/berry',
      title: data.name,
      berry
    });
}
const berriesRender = (data,res) => {
    res.render('list-page', {
        itemName:'berry',
        items: data.results,
        path: '/berries',
        title: 'Berries',
        previous: data.previous,
        next: data.next
    });
}

const renderFunctions = {
    berryRender,
    berriesRender
}
module.exports = renderFunctions