//import Movie from "./Movie";
import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.gettingInput = this.gettingInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props)
  }

  gettingInput(value) {
    console.log(value.target.value)
    this.setState({
      inputText: value.target.value
    })
    //console.log("this.state.inputText: " + this.state.inputText)
  }

  handleSubmit(value) {

    console.log("calling handleSumbit, event is:");

    console.log("props are:")
    // console.log(this.props.action);
    console.log(this.state.inputText)
    this.props.filterMovie(this.state.inputText)
    value.preventDefault();

  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="Search Movie" onChange={this.gettingInput} />
          </label>
          <input type="submit" value="Go!" />
        </form>
      </>
    )
  }
}
export default Search;