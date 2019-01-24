const path = require('path');

const express = require('express');

const pokedexesController = require('../controllers/pokedexes');

const router = express.Router();
router.get('/pokedexes', pokedexesController.getPokedexes);
router.post('/pokedexes', pokedexesController.getPokedexes);
router.get('/pokedex/:pokedexName', pokedexesController.getPokedex);
module.exports = router;
