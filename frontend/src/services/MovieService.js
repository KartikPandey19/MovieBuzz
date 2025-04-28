import axios from 'axios';
import { API_URL } from  '../api/ApiEndPoints.js';
import { Api } from '../api/ApiEndPoints.js';
export const getMovies = async()=>{
    const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const URL = `${API_URL}${Api.getMovies}`
    try{
        const response = await axios.get(URL,{
            params:{
                api_key: TMDB_API_KEY,
                language: 'hi-IN',
                region: 'IN',
            }
        });
        if(response.status === 200){
            return response.data.results;
    }
}catch(error){
    console.error("Error fetching movies:", error);
    throw error;
  }
}