// Main file from where my project starts its execution

const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/ums')
.then(resp=>console.log('Connected'))
.catch(err=>console.log('Error Occured',err))

const app = express();
app.use(express.json()); //parse data to json
app.use(cors()); //allows third party to access APIs
app.get('/',(req,res)=>res.send('User management system is Running'))
app.use('/api/user',require('./routes/user.route'));
app.listen(5000, () => {
    console.log('Server started in Port 5000');
})