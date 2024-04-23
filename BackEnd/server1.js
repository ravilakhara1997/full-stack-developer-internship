const fs= require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/about') {

        res.end('<h1>This About us page</h1>')
    } else if (req.url == '/contact') {

        res.end('<h1>This Contact us page</h1>')
    } else if (req.url == '/News') {

        res.end('<h1>This News page</h1>')
    } else {
        fs.readFile('./file/home.html', (err, data) => {
            if (err) {
                return res.end('<h2>Error Occured </h2>')
            } else {
                return res.end(data.toString());
            }
        })

    }


})

server.listen(8000, () => {
    console.log('Your port listening on PORT No. 8000');
})