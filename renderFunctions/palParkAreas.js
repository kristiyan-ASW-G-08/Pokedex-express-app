const processPokemonList = require("../util/processPokemonList");
const palParkAreasRender = (data, res) => {
  const { next, previous } = data;
  res.render("list-page", {
    itemName: "pal-park-area",
    items: data.results,
    path: "/pal-park-areas",
    title: "Pal Park Areas",
    previous,
    next
  });
};

const palParkAreaRender = (data, res) => {
  const pokemonList = processPokemonList(data.pokemon_encounters);
  res.render("palParkAreas/palParkArea", {
    path: "/pal-park-area",
    title: data.name,
    pokemonList,
    palParkAreaName: data.name
  });
};
const renderFunctions = {
  palParkAreasRender,
  palParkAreaRender
};
module.exports = renderFunctions;
