const axios = require('axios')
const fs = require('fs')
const express = require("express");
const server = express();

const PORT = process.env.PORT || 5000;

var authStr = btoa('ADMISIONES:S0porte*2020');

const fileName = 'testfile.txt';

var strAjaxUrl = 'http://www.aerocivil.gov.co'
  + "/_api/web/lists/getByTitle('ADMISIONES')"
  + "/RootFolder/files/add(overwrite=true,url='"+ fileName +"')";
  
var newFile = fs.createReadStream('testfile.txt');
  
  

server.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en localhost:${PORT}/`);
});

server.get('/upload-file', function (req, res) {
  axios
    .post(strAjaxUrl, newFile,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Basic ' + authStr
      }
    })
    .then(res => {
      console.log(res);
      res.send('Success on file upload.');
    })
    .catch(error => {
      console.error(error);
      res.send('Error on file upload.');
    })
});



