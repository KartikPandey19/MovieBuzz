const axios = require('axios');
const Movie = require('../models/Movie');
require('dotenv').config();

const TMDB_API_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

const fetchFromTMDB = async (endPoint)=>{
    
    try{
        const response = await axios.get(`${TMDB_API_URL}${endPoint}`,{
            params:{
                api_key: TMDB_API_KEY,
                language: 'hi-IN',
                region: 'IN',
            },
        });
        return response.data;
    }catch(error){
        throw new Error('Failed to fetch data from TMDB');
    }
};

const getMovies = async()=>{
    //checking for cache in mongoDb
    const cachedMovies = await Movie.find();
    if(cachedMovies.length > 0){
        return cachedMovies;
    }

    //fetch from TMDB
    const data = await fetchFromTMDB('/discover/movie?with_original_language=hi');
    console.log(data);
    const movies = data.results.map((movie)=>({
        tmdbId: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        genres: movie.genre_ids.map((id) => ({ id })),
        director: movie.director,
    }));

    //cache in mongoDB
    await Movie.insertMany(movies);
    return movies;
}

module.exports ={getMovies};