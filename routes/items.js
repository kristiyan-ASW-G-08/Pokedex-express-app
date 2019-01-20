const path = require('path');

const express = require('express');

const itemsController = require('../controllers/items');

const router = express.Router();
router.get('/items', itemsController.getItems);
router.post('/items', itemsController.getItems);
router.get('/item/:itemName', itemsController.getItem);
module.exports = router;
