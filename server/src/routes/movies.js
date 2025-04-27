const express = require('express');
const router = express.Router();


router.get('/',async(req, res) =>{
    try{
        const movies = await getMovies();
        res.json(movies);
    }catch(error){
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})