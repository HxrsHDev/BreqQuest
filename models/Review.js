// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  description: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Review', reviewSchema);
