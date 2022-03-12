import React from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import Movie from './Movie.jsx';
import Add from './Add.jsx'

var movies = [
  { title: 'Mean Girls',movieStatus:true},
  { title: 'Hackers',movieStatus:true},
  { title: 'The Grey',movieStatus:true },
  { title: 'Sunshine',movieStatus:true },
  { title: 'Ex Machina',movieStatus:true },
];

var newMovies = [];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.filterMovie = this.filterMovie.bind(this);
    this.addMovieEntry=this.addMovieEntry.bind(this);
    this.setWatchStatus = this.setWatchStatus.bind(this);

    this.state = {
      movieData: movies, //set movieData to get all data from movies
    }
  }

  //use to filter movie by the filtant
  filterMovie(filtant) {
    alert("filtering")
    console.log("calling filter movie: " + filtant)
    var filtered = this.state.movieData.filter((movie) =>
      movie.title.toLowerCase().includes(filtant.toLowerCase())
    )
    this.setState({ movieData: filtered })
  }

  addMovieEntry(newMovie){
    var newMovieObject = {}
    newMovieObject.title = newMovie;
    newMovies.push(newMovieObject)
    this.setState({movieData: newMovies})
  }
  
  setWatchStatus(movie,movieStatus){
    if (!movieStatus){ 
   
      //adding another property {status:true/false} to the movies
      //set the this.state status
      this.setWatchStatus({movieStatus:false})
    } else{
     
      this.setWatchStatus({movieStatus:true})
    }
  }
  
  render() {
    console.log("calling app render")
    return (
      <div>
        <h1>Movie List</h1>
      
        <Search filterMovie={this.filterMovie} />
        <Movies movies={this.state.movieData}
         setWatchStatus = {this.setWatchStatus}/>
        <Add addMovieEntry={this.addMovieEntry} />


      </div>
    );

  }
}

export default App;