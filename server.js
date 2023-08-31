// server.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api'); // Import your API routes

// Middleware to parse JSON requests
app.use(express.json());

// Define a route prefix for your API endpoints
app.use('/api', apiRoutes);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
