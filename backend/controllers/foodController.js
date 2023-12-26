
const Food = require('../models/Food.js');

const FoodController = {
  getAllfood: async (req, res) => {
    try {
      const food = await Food.find();
      res.json(food);
    } catch (error) {
      console.error('Error fetching food:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getFoodById: async (req, res) => {
    try {
      const Food = await Food.findById(req.params.id);
      if (!Food) {
        return res.status(404).json({ error: 'Food not found' });
      }
      res.json(Food);
    } catch (error) {
      console.error('Error fetching Food by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createFood: async (req, res) => {
    const { title, description, price } = req.body;

    try {
      const newFood = new Food({ title, description, price, img });
      await newFood.save();
      res.status(201).json(newFood);
    } catch (error) {
      console.error('Error creating Food:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateFood: async (req, res) => {
    const { title, description, price, img } = req.body;

    try {
      const updatedFood = await Food.findByIdAndUpdate(
        req.params.id,
        { title, description, price, img },
        { new: true }
      );

      if (!updatedFood) {
        return res.status(404).json({ error: 'Food not found' });
      }

      res.json(updatedFood);
    } catch (error) {
      console.error('Error updating Food:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  deleteFood: async (req, res) => {
    try {
      const deletedFood = await Food.findByIdAndDelete(req.params.id);

      if (!deletedFood) {
        return res.status(404).json({ error: 'Food not found' });
      }

      res.json({ message: 'Food deleted successfully' });
    } catch (error) {
      console.error('Error deleting Food:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

};

module.exports = FoodController;
