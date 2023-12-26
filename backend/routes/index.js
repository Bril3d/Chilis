const express = require('express');
const food = require('./food');
const user = require('./user');

const router = express.Router();

router.use('/api', food);
router.use('/api', user);

module.exports = router;
