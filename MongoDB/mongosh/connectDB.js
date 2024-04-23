const mongoose = require('mongoose')
const mongoURL = 'mongodb://localhost:27017/Skillsacademy'

async function connectDB(){
    try {
        const resp = await mongoose.connect(mongoURL)
        console.log('connected');
    } catch (error) {
        console.log(`Error occured ${error}`);
    }
}
module.exports={ connectDB }