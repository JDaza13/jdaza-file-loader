const http = require('http');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('AeroCivil FileLoader');
});

server.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${PORT}/`);
});