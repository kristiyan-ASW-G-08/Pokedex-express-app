const path = require('path');

const express = require('express');

const typesController = require('../controllers/types');

const router = express.Router();
router.get('/types', typesController.getTypes);
router.post('/types', typesController.getTypes);
router.get('/type/:typeName', typesController.getType);
module.exports = router;
