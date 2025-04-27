const express = require('express');
const cors = require('cors');
const movieRouter = require('./routes/movies');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/movies', movieRouter)


module.exports = app;
