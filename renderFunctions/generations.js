const getPokemonIdFromUrl = require("../util/getPokemonIdFromUrl");

const generationsRender = (data, res) => {
  const { next, previous } = data;
  res.render("list-page", {
    itemName: "generation",
    items: data.results,
    path: "/generations",
    title: "Generations",
    previous,
    next
  });
};

const generationRender = (data, res) => {
  const { version_groups, id, moves, main_region } = data;
  const generation = { version_groups, id, moves, main_region };
  const pokedex = data.pokemon_species.map(pokemon => {
    const id = getPokemonIdFromUrl(pokemon.url);
    const spriteFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return Object.assign(
      {
        id,
        spriteFront
      },
      pokemon
    );
  });
  generation["pokedex"] = pokedex;
  res.render("generations/generation", {
    path: "/generation",
    title: data.name,
    generation
  });
};
const renderFunctions = {
  generationsRender,
  generationRender
};
module.exports = renderFunctions;
