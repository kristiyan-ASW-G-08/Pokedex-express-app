const versionGroupsRender = (data, res) => {
  res.render('list-page', {
    itemName: 'version-group',
    items: data.results,
    path: '/version-groups',
    title: 'Version Groups',
    previous: data.previous,
    next: data.next
  });
};

const versionGroupRender = (data, res) => {
  res.render('version-groups/version-group', {
    path: '/version-group',
    title: data.name,
    versionGroup: data
  });
};
const renderFunctions = {
  versionGroupsRender,
  versionGroupRender
};
module.exports = renderFunctions;
