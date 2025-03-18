require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import the routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, ' MongoDB Connection Error:'));
db.once('open', () => console.log(' MongoDB Connected Successfully'));

// Use Routes
app.use('/api', routes);  // Prefix all routes with /api

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
