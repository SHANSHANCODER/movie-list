import React from 'react';
import Movie from './Movie.jsx';

const Movies = ({movies,setWatchStatus}) => {
  
  return (
  <ul>
    {movies.map(movie=>(
    <Movie 
      key={movie.title} 
      setWatchStatus = {setWatchStatus}
      movie={movie}
    />))}
  </ul>
  )
};

export default Movies;