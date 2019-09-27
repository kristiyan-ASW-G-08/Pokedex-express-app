const { validationResult } = require("express-validator/check");
exports.getSearchPage = (req, res, next) => {
  res.render("search", {
    path: "/search",
    title: "Search",
    errorsArr: [],
    errorMsg: null
  });
};
exports.search = (req, res, next) => {
  const { name, category } = req.body;
  const errorsObj = validationResult(req);
  const errorsArr = errorsObj.array();
  if (errorsArr.length !== 0) {
    res.render("search", {
      path: "/search",
      title: "Search",
      errorsArr,
      errorMsg: errorsArr[0].msg
    });
  }
  const urlCategory = category
    .split(" ")
    .join("-")
    .toLowerCase();
  const redirectUrl = `/${urlCategory}/${name}`;
  res.redirect(redirectUrl);
};
