// Create web server

const express = require('express');
const app = express();
const port = 3000;

// create a route for the server
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
