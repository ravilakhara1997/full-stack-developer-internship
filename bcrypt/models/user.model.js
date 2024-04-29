const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type: String, require:true},
    usrname:{type: String, require:true},
    email:{type: String, require:true},
    password:{type: String, require:true},

})

const usermodel=mongoose.model('user',userSchema);
module.exports=usermodel;