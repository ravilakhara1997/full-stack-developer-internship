const mongoose= require('mongoose');

const customerSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    username:{type:String, require:true},
    password:{type:String, require:true},
    date:{type:Date, default: Date.now}

})

const custModel = mongoose.model('customer',customerSchema)

module.exports=custModel