const path = require('path');

const express = require('express');

const pokedexController = require('../controllers/pokemon');

const router = express.Router();
router.get('/', pokedexController.getPokedex);
router.post('/', pokedexController.getPokedex);
router.get('/pokemon/:pokemonName', pokedexController.getPokemon);
module.exports = router;
