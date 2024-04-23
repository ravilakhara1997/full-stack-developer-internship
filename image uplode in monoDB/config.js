// DB Connection
const mongoose=require('mongoose');


mongoose.connect(process.env.MONGO_URL)
.then(resp=>console.log('Connected'))
.catch(err=>console.log('Error Occured',err))