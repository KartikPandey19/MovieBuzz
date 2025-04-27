const mongoose = require('mongoose');
const app = require('./index');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});