const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
});

const Food = mongoose.model('food', FoodSchema);

module.exports = Food;
