"use strict";
const express = require("express");
const path = require("path");

const sassMiddleware = require("node-sass-middleware");

const pokemonROuter = require("./routes/pokemon");
const pokedexRouter = require("./routes/pokedexes");
const typesRouter = require("./routes/types");
const generationsRouter = require("./routes/generations");
const searchRouter = require("./routes/search");
const berriesRouter = require("./routes/berries");
const movesRouter = require("./routes/moves");
const regionsRouter = require("./routes/regions");
const versionGroupsRouter = require("./routes/version-groups");
const itemsRouter = require("./routes/items");
const versionsRouter = require("./routes/versions");
const palParkAreasRouter = require("./routes/palParkAreas");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(pokemonROuter);
app.use(berriesRouter);
app.use(versionGroupsRouter);
app.use(movesRouter);
app.use(generationsRouter);
app.use(palParkAreasRouter);
app.use(itemsRouter);
app.use(typesRouter);
app.use(versionsRouter);
app.use(regionsRouter);
app.use(searchRouter);
app.use(pokedexRouter);

process.on("unhandledRejection", (reason, p) => {
  console.log(reason);
});

app.use((error, req, res, next) => {
  res.status(404).redirect("/404");
});
app.use(errorController.get404);

app.listen(3000);
