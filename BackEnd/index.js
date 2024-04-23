const http = require('http');
const { Server } = require('tls');

const server  = http.createServer((req, res) =>{
    res.write("hello word");
    res.end();
}

);

server.listen('8000');