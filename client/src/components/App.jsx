import React from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import Movie from './Movie.jsx';
import Add from './Add.jsx'
import axios from 'axios';

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
    this.watchedButton = this.watchedButton.bind(this);
    this.toWatchButton = this.toWatchButton.bind(this);


    this.state = {
      movieData: movies, //set movieData to get all data from movies
      movieStatues: true,
      movieDatafortaggle: movies 
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
  
  setWatchStatus(movie){
  
   console.log("setWatchStatus was invoked", "movie", movie)
      //adding another property {status:true/false} to the movies
      //set the this.state status
   //   this.setState({movieStatus:!this.movieStatus})
this.setState({moviestatus:movie.movieStatus})
  console.log(movies)
  }
  watchedButton(){
   var watched = this.state.movieDatafortaggle.filter((movie)=>movie.movieStatus === true);
   console.log("watched button is invoked")
   console.log('watchedmovies:', watched)
   this.setState({movieData:watched})
  }

  toWatchButton(){
   var toWatch = this.state.movieDatafortaggle.filter((movie)=>movie.movieStatus === false);
   this.setState({movieData: toWatch})
   console.log('toWatchmovies:', toWatch)
  }

  // componentDidMount() {
  //   axios.get('http://127.0.0.1:3000/api/movies')
  //   .then(response => {
  //     //const posts = response.data;
  //     //this.setState ({posts});
  //     console.log('axios get request')
  //   })
  // }
  render() {
    console.log("calling app render")
    return (
      <div>
        <h1>Movie List</h1>
        <button className='watchbutton' onClick={this.watchedButton}>Watched</button>
        <button className='watchbutton' onClick={this.toWatchButton}>Not Yet Watched</button>
        <Search filterMovie={this.filterMovie} />
        <Movies movies={this.state.movieData}
         setWatchStatus = {this.setWatchStatus}/>
        <Add addMovieEntry={this.addMovieEntry} />


      </div>
    );

  }
}

export default App;