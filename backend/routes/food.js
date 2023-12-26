const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();


const multer = require("multer");

const storage = multer.memoryStorage(); // Use memory storage to get buffer directly

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // adjust the file size limit as needed
  },
});

router.get('/food', foodController.getAllfood);
router.get('/food/:id', foodController.getFoodById);
router.post('/food', upload.single("img"), foodController.createFood);
router.put('/food/:id', foodController.updateFood);
router.delete('/food/:id', foodController.deleteFood);

module.exports = router;
