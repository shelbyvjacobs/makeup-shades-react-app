import React, {Component} from "react";
import axios from "axios";

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "",
            product: "",
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
            .post(`http://localhost:4000/shades`,
            // .post(`https://makeup-shades-api.herokuapp.com/shades`),
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