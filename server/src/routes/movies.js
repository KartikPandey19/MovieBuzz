const express = require('express');
const { getMovies } = require('../services/tmdb');
const router = express.Router();


router.get('/',async(req, res) =>{
    try{
        const movies = await getMovies(req.params.id);
        res.json(movies);
    }catch(error){
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;
