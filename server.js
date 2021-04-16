// Required Packages
const express = require('express');
const path = require('path');

// API routes
const { notes } = require('./db/db');

// Assign a port for the local server to listen to
const PORT = process.env.PORT || 3001;

// Initialize epxress as a variable
const app = express();

// API endpoint
app.get('/api/db', (req, res) => {
  res.json(notes);
});

// Initialize a static folder 'Public'
app.use(express.static(path.join(__dirname, 'public')));

// Add two routes for the two pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Initialize the server listening
app.listen(PORT, () => {
	console.log(`The server has been initiated on port ${PORT}`)
});