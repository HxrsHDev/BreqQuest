// models/Brewery.js
const mongoose = require('mongoose');

const brewerySchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNumber: String,
  website: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Brewery', brewerySchema);
