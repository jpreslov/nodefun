//Load HTTP module
'use strict';
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const path = require("path");
const fs = require("fs");
const rp = require('request-promise');


let chirps = [
    { name: "Tom", message: "What's up" },
    { name: "Sarah", message: "Drinking coffee haha" },
    { name: "Bernard", message: "Rocking out to some tunes" },
    { name: "Dylan", message: "Yoooooo" },
    { name: "Phillip", message: "I\'m just hanging out" }
];


//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 
let data = JSON.stringify(chirps);
fs.writeFileSync('chirps.json', data);

fs.readFile('chirps.json', (err, data) => {
    if (err) throw err;
    let readChirps = JSON.parse(data);
    console.log(readChirps);
});

