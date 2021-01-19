const http = require('http'); // like a PHP require

//require is more or less the same as a JS import

const hostname = '127.0.0.1'; // this is localhost
const port = 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('8 days until the end of the World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});