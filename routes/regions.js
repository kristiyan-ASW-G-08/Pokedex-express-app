const path = require('path');

const express = require('express');

const regionController = require('../controllers/regions');

const router = express.Router();
router.get('/regions', regionController.getRegions);
router.post('/regions', regionController.getRegions);
router.get('/region/:regionName', regionController.getRegion);
module.exports = router;
