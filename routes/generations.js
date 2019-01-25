const path = require('path');

const express = require('express');

const generationsController = require('../controllers/generations');

const router = express.Router();
router.get('/generations', generationsController.getGenerations);
router.post('/generations', generationsController.getGenerations);
router.get('/generation/:generationName', generationsController.getGeneration);
module.exports = router;
