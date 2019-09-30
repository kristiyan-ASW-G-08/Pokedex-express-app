const getStats = data => {
  return Object.entries(data).reduce((acc, [name, value]) => {
    const statObject = {
      name: name.split("_").join(" "),
      value
    };
    const types = {
      string: [...acc, statObject],
      number: [...acc, statObject]
    };
    return types[typeof value] || [...acc];
  }, []);
};
module.exports = getStats;
