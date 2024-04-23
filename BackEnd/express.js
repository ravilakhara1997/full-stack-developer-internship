const express = require('express');

const path = require('path');
const students = require('./file/student.json') // Import JSON file

const app = express(); // created express server

app.get('/', (req,res)=>{
    res.status(200).send('<h1>Home PAge</h1>')

})

app.get('/students', (req,res)=>{
    res.status(200).send(students);

})

// filtter topper student
app.get('/topper', (req,res)=>{
    // using for loop
    // let topper = students[0];
    // for(let s of students){
    //     if(topper.persent<s.persent)
    //     topper=s;

    // }
    // res.status(200).send(topper);

    // using reduce function
    res.status(200).send(students.reduce((pre,curr)=>pre.persent<curr.persent?curr:pre));

})
app.get('/skill', (req,res)=>{
    res.status(200).sendFile(path.resolve('./file/home.html'))
})


app.get('/about', (req,res)=>{
    res.status(200).send('<h1>About PAge</h1>')
})

app.get('/contact', (req,res)=>{
    res.status(200).send('<h1>Contact PAge</h1>')
})

app.get('/news', (req,res)=>{
    res.status(200).send('<h1>News PAge</h1>')
})

app.listen(5000,()=>{
    console.log('Server Started');
})