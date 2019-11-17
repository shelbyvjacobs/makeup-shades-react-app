// Class component

import React, {Component} from "react";

class Create extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    //functionality
    render(){
        return (
            <div className="Forms">
                <form className="CreateForm">
                    Create a Shade: <br/>
                    <input type="text" placeholder="Brand"></input><br/>
                    <input type="text" placeholder="Product"></input><br/>
                    <input type="text" placeholder="Hex Code"></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Create;