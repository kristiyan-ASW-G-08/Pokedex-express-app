const express = require('express');
const path = require('path');

const sassMiddleware = require('node-sass-middleware');

const pokedexRouter = require('./routes/pokedex');
const searchRouter = require('./routes/search')
const berriesRouter = require('./routes/berries')
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const app = express();


app.set('views','views');
app.set('view engine', 'ejs');

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(pokedexRouter)
app.use(berriesRouter)
app.use(searchRouter)
process.on('unhandledRejection', (reason, p) => {
  
});
app.use(errorController.get404);
app.listen(3000);


