exports.getSearchPage = (req, res, next) => {
    res.render('search', {
        path: '/search',
        title:'Search',
      });
  };
  exports.search = (req,res,next) => {
    const {name} = req.body  
    const {subject} = req.body
    let redirectUrl;
    switch (subject) {
        case 'Pokemon':
          redirectUrl = `/pokemon/${name}`
          break;
        case 'Berry':
        redirectUrl = `/berry/${name}`
        break;
          case 
         'Item':
        redirectUrl = `/item/${name}/`
          break;
          case 'Move':
        redirectUrl = `/move/${name}/`
          break;
        default:
        redirectUrl = `/404`
      }

      res.redirect(redirectUrl)
  }
  