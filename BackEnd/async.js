const fs=require('fs');

fs.writeFile('./Ravio.txt', "My name is Ravi Lakhara",(err)=>{
    if(err){
        console.log('Error Occured',err);
        return
    }
    console.log('Data writen secsesfully');
})

console.log('File Writing Sttoped');