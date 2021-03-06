const http = require('http');

//const hostname = '192.168.1.7'; //'127.0.0.1';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const ip = req.connection.remoteAddress;
  console.log('user ip: ', ip);
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});