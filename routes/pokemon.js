const path = require('path');

const express = require('express');

const pokemonController = require('../controllers/pokemon');

const router = express.Router();
router.get('/', pokemonController.getPokedex);
router.post('/', pokemonController.getPokedex);
router.get('/pokemon/:pokemonName', pokemonController.getPokemon);
module.exports = router;
