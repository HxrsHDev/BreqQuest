// app.js
const express = require('express');
const app = express();
const db = require('./db');
const breweryRoutes = require('./routes/breweryRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use('/breweries', breweryRoutes);
app.use('/reviews', reviewRoutes);

// ... Other configurations and middleware ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
