const path = require('path');

const express = require('express');

const movesController = require('../controllers/moves');

const router = express.Router();
router.get('/moves', movesController.getMoves);
router.post('/moves', movesController.getMoves);
router.get('/move/:moveName', movesController.getMove);
module.exports = router;
