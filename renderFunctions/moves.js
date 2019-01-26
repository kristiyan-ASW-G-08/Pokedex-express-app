const getStringValue = require('../util/getStringValue');
const movesRender = (data, res) => {
  res.render('list-page', {
    itemName: 'move',
    items: data.results,
    path: '/moves',
    title: 'Moves',
    previous: data.previous,
    next: data.next
  });
};

const moveRender = (data, res) => {
  const stats = getStringValue(data);
  const move = {
    stats,
    name: data.name,
    effect_entries: data.effect_entries
  };
  res.render('moves/move', {
    path: '/move',
    title: data.name,
    move
  });
};
const renderFunctions = {
  movesRender,
  moveRender
};
module.exports = renderFunctions;
