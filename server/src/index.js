const express = require('express');
const cors = require('cors');
const movieRouter = require('./routes/movies');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/v1/movies', movieRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});


module.exports = app;
