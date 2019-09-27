const fetch = require("node-fetch");
const getData = async url => {
  const response = await fetch(url);
  const responseData = await response.json();
  return responseData;
};
module.exports = getData;
