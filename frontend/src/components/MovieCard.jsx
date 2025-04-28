import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export const MovieCard = ({data}) => {
  return (
  <Link to={'/#'}>
    <div className='bg-white '>
        <img src={data.poster_path} alt={data.title} className='w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out' />
        
    </div>
  </Link>
);
};
