const path = require('path');

const express = require('express');

const versionGroups = require('../controllers/version-groups');

const router = express.Router();
router.get('/version-groups', versionGroups.getVersionGroups);
router.post('/version-groups', versionGroups.getVersionGroups);
router.get('/version-group/:versionGroupName', versionGroups.getVersionGroup);
module.exports = router;
