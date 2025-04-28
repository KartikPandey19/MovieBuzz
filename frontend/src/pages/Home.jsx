import { useState,useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { getMovies } from "../services/MovieService";

export const Home = ()=>{
    const [MovieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetchMovies();
    },[]);

    const fetchMovies = async ()=>{
        try{
            setLoading(true);
            const response = await getMovies();
            if(response.length !==0){
                setMovieData(response);
            }
        }catch(error){
            console.error("Error fetching movies:", error);
        }finally{
            setLoading(false);
        }
    }
    return(
    <>
    {loading ? (<div>{"Loading..."}</div>):
    (MovieData.map((movie)=>(
        <MovieCard
            data={movie}
            />
    )))
    }
    
    </>
    )
}