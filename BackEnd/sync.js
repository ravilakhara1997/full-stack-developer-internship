const fs=require('fs');

console.log('Process started..');

fs.writeFileSync('./trem.txt', 'Hello All..');
console.log('Data Written');

let data=fs.readFileSync('./trem.txt', );
console.log(data.toString());

fs.appendFileSync('./trem.txt', 'Hello All..Ravi');
console.log('Data Written');

data=fs.readFileSync('./trem.txt');
console.log(data.toString());
console.log('Process Completed');