import React from "react";

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
    }

    handleSubmitAdd(val) {
        this.props.addMovieEntry(this.state.inputTextAdd);
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