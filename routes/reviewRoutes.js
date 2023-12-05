// routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/', reviewController.createReview);
router.get('/brewery/:id', reviewController.getBreweryReviews);

module.exports = router;
