const itemsRender = (data, res) => {
  const { next, previous } = data;
  const items = data.results.map(item => {
    item[
      "sprite"
    ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`;
  });
  res.render("items/items", {
    items: data.results,
    path: "/items",
    title: "Items",
    previous,
    next
  });
};

const itemRender = (data, res) => {
  res.render("items/item", {
    path: "/item",
    title: data.name,
    data
  });
};
const renderFunctions = {
  itemsRender,
  itemRender
};
module.exports = renderFunctions;
