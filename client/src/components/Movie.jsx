import React from 'react';



const Movie = (props) => {
  // console.log("props:", props)
  const ifWatched = () => {
    console.log("ifWatched got called")
    props.movie.movieStatus = !props.movie.movieStatus;
    props.setWatchStatus(props.movie);

  }
 // console.log("movie: ", props.movie)
 
  if (props.movie.movieStatus) {
    return (<li>{props.movie.title}
      <button onClick={ifWatched}>Watched</button>
    </li>)
  } else {
    return (
      <li>
        {props.movie.title}
        <button onClick={ifWatched}>Not Yet Watched</button>
      </li>
    )
  }
}

export default Movie;