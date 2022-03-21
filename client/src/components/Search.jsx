//import Movie from "./Movie";
import React from "react";
import axios from "axios";

// search for -----> search
// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputText: ""
//     };
//     this.gettingInput = this.gettingInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     console.log(this.props)
//   }

//   gettingInput(value) {
//     console.log(value.target.value)
//     this.setState({
//       inputText: value.target.value
//     })
//     //console.log("this.state.inputText: " + this.state.inputText)
//   }

//   handleSubmit(value) {

//     console.log("calling handleSumbit, event is:");

//     console.log("props are:")
//     // console.log(this.props.action);
//     console.log(this.state.inputText)
//     this.props.filterMovie(this.state.inputText)
//     value.preventDefault();

//   }

//   render() {
//     return (
//       <>
//         <form className="form" onSubmit={this.handleSubmit}>
//           <label>
//             <input type="text" name="Search Movie" onChange={this.gettingInput} />
//           </label>
//           <input type="submit" value="Go!" />
//         </form>
//       </>
//     )
//   }
// }

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(value) {
   // alert("I got submit");
    // this.setState({searchtext: event.target.value})
    // getting value from the form
    // set axios post request and sent it to the correct message
    //var inputdata = value.target.value;
    console.log("inputdata>>>>>", this.state.searchtext);
    
    axios
      .get("/api/movies/search?term=" + this.state.searchtext)
      .then((res) => {
        //const posts = response.data
        //this.setState ({posts});
        console.log("res.data----->", res.data);
        console.log(this.props);
        this.props.getSearchKeyword(res.data);
        // this.setState({ movieData: res.data});
      })
      .catch((error) => {
        console.log(error);
      });
      value.preventDefault();
  }
  handleChange(value) {
    //handlechange worked
   // alert("information onchange");
  //  console.log('handleChange value>>>>>',value.target.value)
  this.setState({searchtext:value.target.value})
    value.preventDefault();
  }
  render() {
    return (
      <>
        <form className="searchform" onSubmit={this.handleSubmit}>

            <input
              type="text"
              name="Search DataBase Movies"
              onChange={this.handleChange}
            />
     
          <input type="submit" value="submit search" />
        </form>
      </>
    );
  }
}

export default Search;
