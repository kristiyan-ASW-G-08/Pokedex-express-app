const processPokemonList = require("../util/processPokemonList");
const typesRender = (data, res) => {
  const { next, previous } = data;
  res.render("list-page", {
    itemName: "type",
    items: data.results,
    path: "/types",
    title: "Types",
    previous,
    next
  });
};

const typeRender = (data, res) => {
  const pokemonList = processPokemonList(data.pokemon);
  const damageRelations = Object.entries(data.damage_relations).map(
    damageRelation => {
      const editedDamageRelation = {};
      editedDamageRelation["name"] = damageRelation[0].split("_").join(" ");
      if (damageRelation[1].length !== 0) {
        editedDamageRelation["types"] = damageRelation[1];
        return editedDamageRelation;
      }
    }
  );
  res.render("types/type", {
    pokemonList,
    itemName: "move",
    items: data.moves,
    path: "/type",
    damageRelations,
    title: data.name,
    type: data,
    previous: null,
    next: null
  });
};
const renderFunctions = {
  typesRender,
  typeRender
};
module.exports = renderFunctions;
