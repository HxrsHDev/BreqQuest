// controllers/reviewController.js
const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { rating, description } = req.body;
    const newReview = await Review.create({ rating, description });
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getBreweryReviews = async (req, res) => {
  try {
    const breweryId = req.params.id;
    const reviews = await Review.find({ brewery: breweryId });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
