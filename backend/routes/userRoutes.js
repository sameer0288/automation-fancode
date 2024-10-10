const express = require('express');
const { getFanCodeUsersTodoStats } = require('../controllers/userController');
const router = express.Router();

router.get('/fancode-stats', getFanCodeUsersTodoStats);

module.exports = router;
