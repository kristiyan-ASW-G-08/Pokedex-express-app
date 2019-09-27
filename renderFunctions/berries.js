const getStats = require("../util/getStats");
const berryRender = (data, res) => {
  const { name, id, flavors } = data;
  const stats = getStats(data);
  const berry = {
    name,
    id,
    flavors,
    stats
  };
  res.render("berries/berry", {
    path: "/berry",
    title: data.name,
    berry
  });
};
const berriesRender = (data, res) => {
  const { next, previous } = data;
  res.render("list-page", {
    itemName: "berry",
    items: data.results,
    path: "/berries",
    title: "Berries",
    previous,
    next
  });
};

const renderFunctions = {
  berryRender,
  berriesRender
};
module.exports = renderFunctions;
