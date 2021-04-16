const express = require('express');
const path = require('path');

// Initialize epxress as a variable
const app = express();

// Initialize a static folder 'Public'
app.use(express.static(path.join(__dirname, 'public')));

// Assign a port for the local server to listen to
const PORT = process.env.PORT || 3001;

// Initialize the server listening
app.listen(PORT, () => console.log(`The server has been initiated on port ${PORT}`));