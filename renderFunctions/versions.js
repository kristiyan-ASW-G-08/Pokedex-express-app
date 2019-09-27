const versionsRender = (data, res) => {
  const { next, previous } = data;
  res.render("list-page", {
    itemName: "version",
    items: data.results,
    path: "/versions",
    title: "Versions",
    previous,
    next
  });
};

const versionRender = (data, res) => {
  res.render("versions/version", {
    path: "/version",
    title: data.name,
    version: data
  });
};
const renderFunctions = {
  versionsRender,
  versionRender
};
module.exports = renderFunctions;
