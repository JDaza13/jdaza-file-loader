const axios = require('axios');
const fs = require('fs');
const express = require("express");
const server = express();

const PORT = process.env.PORT || 5000;

  

server.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en localhost:${PORT}/`);
});

server.get('/drive-api-test', function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('drive_api_test.html').pipe(res);
});



