exports.getSearchPage = (req, res, next) => {
    res.render('search', {
        path: '/search',
        title:'Search',
      });
  };
  exports.search = (req,res,next) => {
    const {name} = req.body  
    const {subject} = req.body
    let apiUrl;
    switch (subject) {
        case 'Pokemon':
          res.redirect(`/pokemon/${name}`)
          break;
        case 'Berries':
        res.redirect(`/berry/${name}`)
          case 
         'Items':
        apiUrl = `https://pokeapi.co/api/v2/item/${name}/`
          break;
          case 'Moves':
        apiUrl = `https://pokeapi.co/v2/move/${name}/`
          break;
        default:
        apiUrl = `https://pokeapi.co/api/v2/ability/${name}/`
      }
    console.log(name)
    console.log(subject)
  }
  