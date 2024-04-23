const fs=require('fs');
// (This is singal file read method)
// fs.readFile('./Hello.txt',(err,data)=>{
//     if(err){
//         console.log('Error Occured',err);
//         return
//     }
//     console.log(data.toString());
// }
// )
function deleteMyFile(filename){
    fs.unlink(filename,(err)=>{
        if(err){
            console.log('Error Occured',err);
            return
        }
        console.log('File delet seccessesfully');
    }
    )
}

function AddToexisctingFile(filename,data){
    fs.appendFile(filename,data,(err)=>{
        if(err){
            console.log('Error Occured',err);
            return
        }
        console.log('Data Ubdate secsesfully');
    }
    )
}

function createMyFile(filename,data){
    fs.writeFile(filename,data,(err)=>{
        if(err){
            console.log('Error Occured',err);
            return
        }
        console.log('Data writen secsesfully');
    }
    )
}

// (THis multiple file read method)

function readMyFile(filename){
    fs.readFile(filename,(err,data)=>{
        if(err){
            console.log('Error Occured',err);
            return
        }
        console.log(data.toString());
    }
    )
}
// deleteMyFile('./Ravi.txt')
// createMyFile('./Ravi.txt', 'My name us Ravi Lakhara, I am a Full Stack Developer')
// AddToexisctingFile('./Ravi.txt', ', I am completed B.tech in 2019 ')
readMyFile('./Ravi.txt')