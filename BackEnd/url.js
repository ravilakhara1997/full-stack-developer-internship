const { log } = require('console');
const url=require('url');
const link= 'http//localhost5000/product/index.html?name=ravi&age=20&city=mandar';

const myurl=url.parse(link,true);

console.log('Protocol: ${myurl.protocol}');