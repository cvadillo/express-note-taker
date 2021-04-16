// Required Packages
const express = require('express');
const path = require('path');

// API routes
const { notes } = require('./db/db');

// Assign a port for the local server to listen to
const PORT = process.env.PORT || 3001;

// Initialize epxress as a variable
const app = express();

// Initialize a static folder 'Public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/db', (req, res) => {
  res.json(notes);
});

// Initialize the server listening
app.listen(PORT, () => console.log(`The server has been initiated on port ${PORT}`));