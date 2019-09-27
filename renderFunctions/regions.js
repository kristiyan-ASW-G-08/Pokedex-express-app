const regionsRender = (data, res) => {
  const { next, previous } = data;
  res.render("list-page", {
    itemName: "region",
    items: data.results,
    path: "/regions",
    title: "Regions",
    previous,
    next
  });
};

const regionRender = (data, res) => {
  res.render("regions/region", {
    path: "/region",
    title: data.name,
    region: data
  });
};
const renderFunctions = {
  regionsRender,
  regionRender
};
module.exports = renderFunctions;
