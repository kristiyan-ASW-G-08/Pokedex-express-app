const path = require('path');

const express = require('express');

const berriesRouter = require('../controllers/berries');

const router = express.Router();
router.get('/berries', berriesRouter.getBerries);
router.post('/berries', berriesRouter.getBerries);
router.get('/berry/:berryName', berriesRouter.getBerry);
module.exports = router;
