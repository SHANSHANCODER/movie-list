import React from 'react';



const Movie = ({ movie, setWatchStatus }) => {
  const ifWatched = () => {
    setWatchStatus(movie, movie.movieStatus);
    movie.status = !movie.movieStatus;
  }

  // return (
  //   <li>movie</li>
  // )

  if (movie.movieStatus) {
    return (<li>{movie.title}
      <button onClick={ifWatched}>Watched</button>
    </li>)
  } else {
    return (
      <li>
        {movie.title}
        <button onClick={ifWatched}>Not Yet Watched</button>
      </li>
    )
  }
}

export default Movie;