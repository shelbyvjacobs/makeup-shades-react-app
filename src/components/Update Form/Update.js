import React, {Component} from "react";
import axios from "axios";

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            hex: ""
        }
    }

    handleChange = (evt) => {
        evt.preventDefault()
        console.log("handlin' that change")
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        axios
            .get(
                `http://localhost:4000/shades/${this.state.id}/edit`,
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
                    Update a Shade: <br/>
                    <input type="text" name="id" placeholder="ID" onChange={this.handleChange}></input><br/>
                    <input type="text" name="hex" placeholder="New Hex Code" onChange={this.handleChange}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Update;