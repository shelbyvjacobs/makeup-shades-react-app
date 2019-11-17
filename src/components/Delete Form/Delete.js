import React, {Component} from "react";
import axios from "axios";

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hex: ""
        }
    }

    handleChange = (evt) => {
        evt.preventDefault();
        console.log("handlin' that change")
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("You submitted!")
    }

    render(){
        return (
            <div className="Forms">
                <form className="CreateForm" onSubmit={this.handleSubmit}>
                    Delete a Shade: <br/>
                    <input type="text" name="hex" placeholder="Hex Code" onChange={this.handleChange}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Delete;