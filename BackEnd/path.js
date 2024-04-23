const path=require('path');

const mypath=__dirname+'\\path.js';

console.log('File Name:', path.basename(mypath));
console.log('Extention Name:', path.extname(mypath));
console.log('Is absolute:', path.isAbsolute(mypath));

console.log(path.isAbsolute('server.js')); //it is reletive

const directoryName='/user';
const childName='local';
const FileName='index.js';

console.log(path.join(directoryName,childName,FileName));

console.log(path.resolve('server.js'));



