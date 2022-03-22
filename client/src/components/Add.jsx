import React from "react";
import axios from "axios";

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputTextAdd: ""
        };
        this.gettingInputAdd = this.gettingInputAdd.bind(this);
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this)
    }

    gettingInputAdd(val) {
        this.setState({inputTextAdd : val.target.value})
        console.log("add string here >>>>>>>",val.target.value)
    }

    handleSubmitAdd(val) {
        axios
        .post("/api/movies",{title:this.state.inputTextAdd})
          .then((res) => {
            //const posts = response.data
            //this.setState ({posts});
           //   console.log('res.data----->', res.data);
           console.log('res.data>>>>>>',res.data)
           this.props.addMovieEntry(res.data);
         //   this.setState({ movieData: res.data});
          })
          .catch(function (error) {
            console.log(error);
          });
      //  this.props.addMovieEntry(this.state.inputTextAdd);
        val.preventDefault();
    }


    render() {
        return (
            <>
                <form className="form" onSubmit={this.handleSubmitAdd}>
                    <label>
                        <input type="text" name="Add Movie"  onChange={this.gettingInputAdd} />
                    </label>
                    <input type="submit" value="Add!" />
                </form>
            </>
        )
    }



}

export default Add;