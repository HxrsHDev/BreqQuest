// routes/breweryRoutes.js
const express = require('express');
const router = express.Router();
const Brewery = require('../models/Brewery');

router.get('/:id', async (req, res) => {
    try {
        const brewery = await Brewery.findById(req.params.id).populate('reviews');
        if (!brewery) {
            return res.status(404).json({ message: 'Brewery not found' });
        }

        res.json(brewery);
    } catch (error) {
        console.error('Error fetching brewery details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;