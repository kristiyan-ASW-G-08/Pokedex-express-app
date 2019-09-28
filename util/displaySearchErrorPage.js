const displaySearchErrorPage = (status, sectionName, itemName, res) => {
  if (status === 404) {
    res.render("search-error", {
      error: `${sectionName} with name ${itemName} wasn't found.Make sure that your search parameters are correct`,
      path: "/search-error",
      title: "Search Error"
    });
  }
};

module.exports = displaySearchErrorPage;
