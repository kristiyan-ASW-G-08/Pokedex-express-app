const path = require('path');

const express = require('express');

const versionsController = require('../controllers/versions');

const router = express.Router();
router.get('/versions', versionsController.getVersions);
router.post('/versions', versionsController.getVersions);
router.get('/version/:versionName', versionsController.getVersion);
module.exports = router;
