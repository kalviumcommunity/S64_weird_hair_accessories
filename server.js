require('dotenv').config();  // Load environment variables
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Log connection status
db.on('error', console.error.bind(console, ' MongoDB Connection Error:'));
db.once('open', () => console.log(' MongoDB Connected Successfully'));

// Home Route to Check DB Connection Status
app.get('/', (req, res) => {
    if (db.readyState === 1) {
        res.send({ status: "Connected", message: "MongoDB is running" });
    } else {
        res.send({ status: "Not Connected", message: "MongoDB connection failed" });
    }
});

// Start Server
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
