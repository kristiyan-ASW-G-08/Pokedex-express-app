const regionsRender = (data, res) => {
  res.render('list-page', {
    itemName: 'region',
    items: data.results,
    path: '/regions',
    title: 'Regions',
    previous: data.previous,
    next: data.next
  });
};

const regionRender = (data, res) => {
  res.render('regions/region', {
    path: '/region',
    title: data.name,
    region: data
  });
};
const renderFunctions = {
  regionsRender,
  regionRender
};
module.exports = renderFunctions;
