const { validationResult } = require('express-validator/check');
exports.getSearchPage = (req, res, next) => {
  res.render('search', {
    path: '/search',
    title: 'Search',
    errorsArr:[],
    errorMsg:null,
  });
};
exports.search = (req, res, next) => {
  const { name } = req.body;
  const { category } = req.body;
  const errorsObj = validationResult(req);
  const errorsArr = errorsObj.array()
  if(errorsArr.length !== 0){
    res.render('search', {
      path: '/search',
      title: 'Search',
      errorsArr,
      errorMsg:errorsArr[0].msg
    });
  }
  let redirectUrl;
  switch (category) {
    case 'Pokemon':
      redirectUrl = `/pokemon/${name}`;
      break;
    case 'Berry':
      redirectUrl = `/berry/${name}`;
      break;
    case 'Item':
      redirectUrl = `/item/${name}/`;
      break;
    case 'Move':
      redirectUrl = `/move/${name}/`;
      break;
    case 'Pal Park Area':
      redirectUrl = `/pal-park-area/${name}/`;
      break;
    case 'Pokedex':
      redirectUrl = `/pokedex/${name}/`;
      break;
    case 'Region':
      redirectUrl = `/region/${name}/`;
      break;
      case 'Version':
      redirectUrl = `/version/${name}/`;
      break;
      case 'Version Group':
      redirectUrl = `/version-group/${name}/`;
      break;
      case 'Type':
      redirectUrl = `/type/${name}/`;
      break;
      case 'Generation':
      redirectUrl = `/generation/${name}/`;
      break;
    default:
      redirectUrl = `/404`;
  }

  res.redirect(redirectUrl);
};
