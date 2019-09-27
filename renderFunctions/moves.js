const getStats = require("../util/getStats");
const movesRender = (data, res) => {
  const { next, previous } = data;
  res.render("list-page", {
    itemName: "move",
    items: data.results,
    path: "/moves",
    title: "Moves",
    previous,
    next
  });
};

const moveRender = (data, res) => {
  const stats = getStats(data);
  const move = {
    stats,
    name: data.name,
    effect_entries: data.effect_entries
  };
  res.render("moves/move", {
    path: "/move",
    title: data.name,
    move
  });
};
const renderFunctions = {
  movesRender,
  moveRender
};
module.exports = renderFunctions;
