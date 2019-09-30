const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');
const searchController = require('../controllers/search');

const router = express.Router();
router.get('/search', searchController.getSearchPage);
router.post(
  '/search',
  [
    body('name', `Name should  be at least 2 letters long`)
      .exists()
      .escape()
      .isLength({ min: 2 })
      .isString()
      .trim(),
      body('category', 'Category should  be at least 4 letters long')
      .exists()
      .escape()
      .isLength({ min: 4 })
      .isString()
      .trim()
  ],
  searchController.search
);
module.exports = router;
