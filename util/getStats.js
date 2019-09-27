const getStats = data => {
  return Object.entries(data).reduce((acc, curr) => {
    const [name, value] = curr;
    const statObject = {
      name: name.split("_").join(" "),
      value
    };
    return typeof value === "string" || typeof value === "number"
      ? [...acc, statObject]
      : [...acc];
  }, []);
};
module.exports = getStats;
