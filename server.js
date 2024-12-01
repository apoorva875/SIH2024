const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import CORS package
const router = express.Router();

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow only your frontend (localhost:3000) to access the API
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));

app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

// Example GET route
router.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from API' });
});

module.exports = router;
