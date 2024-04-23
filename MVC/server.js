const { log } = require('console');
const express = require('express');
app.use(express.json());  //read the coming from requset body
const users=[];
const app = express();

app.post("/api/user",(req,res)=>{
    const data=req.body;
    users.push(data);
    res.status(201).send('POST API Trigger')
})

app.get("/api/user",(req,res)=>{
    res.status(200).send('Get  API Trigger')
})

app.get("/api/user",(req,res)=>{
    const id = req.params.id; // get the URL  parameter
    const user =users.findIndex((val)=>val.id==id); //check user if available with given id
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send('Not Found');
    }
})

app.put("/api/user",(req,res)=>{
    const id = req.params.id; // get the URL  parameter
    const index =users.find((val)=>val.id==id); //check user if available with given id
    if(index>=0){
        users[index]=req.body
        res.status(200).send('User Updated');
    }else{
        res.status(404).send('Not Found to Uodate');
    }
})



app.delete("/api/user",(req,res)=>{
    const id = req.params.id; // get the URL  parameter
    const index =users.find((val)=>val.id==id); //check user if available with given id
    if(index>=0){
        users.splice(index,1); //Data Deleted
        res.status(200).send('User deleted');
    }else{
        res.status(404).send('Not Found to delete');
    }
})

app.listen(5000,()=>{
    console.log('Server Started');
})