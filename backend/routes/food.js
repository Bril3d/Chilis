const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();


router.get('/food', foodController.getAllfood);
router.get('/food/:id', foodController.getFoodById);
router.post('/food', foodController.createFood);

module.exports = router;
