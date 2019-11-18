import React, {Component} from "react";
import axios from "axios";

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
    }

    handleChange = (evt) => {
        evt.preventDefault();
        console.log("handlin' that change")
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state)
        axios
            .delete(
                `http://localhost:4000/shades/${this.state.id}`,
                // `https://makeup-shades-api.herokuapp.com/shades/${this.state.id}`,
                this.state
            )
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <div className="Forms">
                <form className="CreateForm" onSubmit={this.handleSubmit}>
                    Delete a Shade: <br/>
                    <input type="text" name="id" placeholder="ID" onChange={this.handleChange}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Delete;