const path = require('path');

const express = require('express');

const pallParkController = require('../controllers/palParkAreas');

const router = express.Router();
router.get('/pal-park-areas', pallParkController.getPalParkAreas);
router.post('/pal-park-areas', pallParkController.getPalParkAreas);
router.get('/pal-park-area/:palParkAreaName', pallParkController.getPalParkArea);
module.exports = router;
