import React from "react";
import Movies from "./Movies.jsx";
import Search from "./Search.jsx";
import Movie from "./Movie.jsx";
import Add from "./Add.jsx";
import axios from "axios";
//import res from 'express/lib/response';

// var movies = [
//   { title: 'Mean Girls',movieStatus:true},
//   { title: 'Hackers',movieStatus:true},
//   { title: 'The Grey',movieStatus:true },
//   { title: 'Sunshine',movieStatus:true },
//   { title: 'Ex Machina',movieStatus:true },
// ];

var newMovies = [];

class App extends React.Component {
  constructor(props) {
    super(props);

   // this.filterMovie = this.filterMovie.bind(this);
    this.addMovieEntry = this.addMovieEntry.bind(this);
  //  this.setWatchStatus = this.setWatchStatus.bind(this);
    // this.watchedButton = this.watchedButton.bind(this);
    // this.toWatchButton = this.toWatchButton.bind(this);
    this.getSearchKeyword=this.getSearchKeyword.bind(this);

    this.state = {
      movieData: [], //set movieData to get all data from movies
      movieStatues: true,
      movieDatafortoggle: [], //movies
    };
  }

  //use to filter movie by the filtant--->frontend search
  // filterMovie(filtant) {
  //   alert("filtering");
  //   console.log("calling filter movie: " + filtant);
  //   var filtered = this.state.movieData.filter((movie) =>
  //     movie.title.toLowerCase().includes(filtant.toLowerCase())
  //   );
  //   this.setState({ movieData: filtered });
  // }
  //search keyword to send axios request --->backend search 

  
  // add movie entry-----> frontend 
  // addMovieEntry(newMovie) {
  //   var newMovieObject = {};
  //   newMovieObject.title = newMovie;
  //   newMovies.push(newMovieObject);
  //   this.setState({ movieData: newMovies });
  // }
  //add movie entry----->backend
  addMovieEntry(newMovies) {
    this.setState({ movieData: newMovies });
  }

  //set movie status ----> frontend 
  // setWatchStatus(movie) {
  //   console.log("setWatchStatus was invoked", "movie", movie);
  //   //adding another property {status:true/false} to the movies
  //   //set the this.state status
  //   //   this.setState({movieStatus:!this.movieStatus})
  //   this.setState({ moviestatus: movie.movieStatus });
  //   console.log(movies);
  // }
  // watchedButton() {
  //   var watched = this.state.movieDatafortaggle.filter(
  //     (movie) => movie.movieStatus === true
  //   );
  //   console.log("watched button is invoked");
  //   console.log("watchedmovies:", watched);
  //   this.setState({ movieData: watched });
  // }

  // toWatchButton() {
  //   var toWatch = this.state.movieDatafortoggle.filter(
  //     (movie) => movie.movieStatus === false
  //   );
  //   this.setState({ movieData: toWatch });
  //   console.log("toWatchmovies:", toWatch);
  // }

  componentDidMount() {
    axios
    .get("/api/movies")
      .then((res) => {
        //const posts = response.data
        //this.setState ({posts});
       //   console.log('res.data----->', res.data);
        this.setState({ movieData: res.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getSearchKeyword(result){
    this.setState({movieData:result})
  }
  render() {
    console.log("calling app render");
    return (
      <div>
        <h1>Movie List</h1>
        {/* <button className="watchbutton" onClick={this.watchedButton}>
          Watched
        </button>
        <button className="watchbutton" onClick={this.toWatchButton}>
          Not Yet Watched
        </button> */}
        <Search filterMovie={this.filterMovie}
                getSearchKeyword = {this.getSearchKeyword} />
        <Movies
          movies={this.state.movieData}
          setWatchStatus={this.setWatchStatus}
        />
        <Add  addMovieEntry={this.addMovieEntry} />
      </div> 
    );
  }
}

export default App;
