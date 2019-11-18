import React, {Component} from "react";
import axios from "axios";

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange = (evt) => {
        evt.preventDefault()
        console.log("handlin' that change")
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("You submitted!")
    }

    render(){
        return (
            <div className="Forms">
                <form className="CreateForm" onSubmit={this.handleSubmit}>
                    Update a Shade: <br/>
                    <input type="text" name="hex" placeholder="ID" onChange={this.handleChange}></input><br/>
                    <input type="text" name="hex" placeholder="New Hex Code" onChange={this.handleChange}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Update;