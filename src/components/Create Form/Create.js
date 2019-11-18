import React, {Component} from "react";
import axios from "axios";

class Create extends Component {
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
        console.log("you submitted!")
    }

    render(){
        return (
            <div className="Forms">
                <form className="CreateForm" onSubmit={this.handleSubmit}>
                    Create a Shade: <br/>
                    <input type="text" name="brand" placeholder="Brand" onChange={this.handleChange}></input><br/>
                    <input type="text" name="product" placeholder="Product" onChange={this.handleChange}></input><br/>
                    <input type="text" name="hex" placeholder="Hex Code" onChange={this.handleChange}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Create;