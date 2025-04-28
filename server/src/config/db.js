const mongoose = require('mongoose');

const connectDB = async ()=>{
    console.log(process.env.MONGO_URL);
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    }catch(error){
        console.error('MongoDB connection error:', error);
    }
}

module.exports = connectDB;