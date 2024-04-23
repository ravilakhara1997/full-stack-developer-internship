const { connectDB } = require('./connectDB');
connectDB()

const custModel =require('./model/custModel');
const ProductModel=require('./model/product');


async function addProduct(name,price,description,category){
    try {
        const newProduct = new ProductModel({name,price,description,category});
        const resp = await newProduct.save(); //store recored in DB
        console.log(resp);
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}

addProduct('Headphone',1500,'2x Sound','Electronics');

async function  deleteCustomer(id){
    try {
        
        const resp= await custModel.findByIdAndDelete(id)
        if(resp){
           return console.log('Customer deleted', resp);
        }
        return console.log('Customer not found to delete');
        
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}
async function  updateCustomer(id,name,password){
    try {
        
        const resp= await custModel.findByIdAndUpdate(id,{name,password})
        if(resp){
           return console.log('Customer updated', resp);
        }
        return console.log('Customer not found to update');
        
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}

async function  getCustomerById(id){
    try {
        
        const resp= await custModel.findById(id)
        console.log(resp);
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}

async function  getCustomerByname(name){
    try {
        
        const resp= await custModel.findOne({name})
        console.log(resp);
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}

async function  getAllCustomer(){
    try {
        // const resp= await custModel.find({})//get all data with all field
        const resp= await custModel.find({},{_id:0,date:0,__v:0}) // get all data without id, date, _v
        console.log(resp);
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}

async function addCustomer(name,email,username,password){
    try {
        const newCustomer = new custModel({name,email,username,password});
        const resp = await newCustomer.save(); //store recored in DB
        console.log(resp);
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}

addCustomer('alex','alex@gamil.com','alex@123', '123456789');
//getAllCustomer();
// getCustomerById('660bd4048666761ffb83d55c');
// getCustomerByname('boby');
updateCustomer('660bd4c9dfcb953e772f0d9d','bobby','bobby123');
