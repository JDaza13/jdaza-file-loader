const express = require("express");
const server = express();

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en localhost:${PORT}/`);
});

server.get('/upload-file', function (req, res) {
  res.send('[GET]Saludos desde express');
});