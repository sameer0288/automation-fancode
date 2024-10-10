const express = require('express');
const app = express();
const cors = require('cors');  // Import CORS middleware
const userRoutes = require('./routes/userRoutes');

app.use(express.json());


// Use CORS to allow requests from any origin
app.use(cors());

// API routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
