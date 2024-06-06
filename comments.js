// create a web server
// create a route for comments
// send back a response with comments array
// start the server and listen on port 3000

const http = require('http');
const fs = require('fs');

const comments = [
  { name: 'John', message: 'Hello' },
  { name: 'Jane', message: 'Hi' },
  { name: 'Jack', message: 'Hey' },
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});