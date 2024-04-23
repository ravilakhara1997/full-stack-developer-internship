const http = require('http');

const server = http.createServer((req, res) => {


    res.writeHead(200, { 'content-type': 'text/text' })
    res.write('<h1>Welcome to the server </h1');
    res.write('<hr><h2>Node </h2');
    res.end()// this last resorse
})

server.listen(5000, () => {
    console.log('Your port listening on PORT No. 5000');
})