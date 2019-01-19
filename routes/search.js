const path = require('path');

const express = require('express');

const searchController = require('../controllers/search');

const router = express.Router();
router.get('/search', searchController.getSearchPage);
router.post('/search',searchController.search)
module.exports = router;
