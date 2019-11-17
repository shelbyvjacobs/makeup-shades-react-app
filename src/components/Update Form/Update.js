import React, {Component} from "react";

class Update extends Component {
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
                    Update a Shade: <br/>
                    <input type="text" placeholder="Current Hex Code"></input><br/>
                    <input type="text" placeholder="New Hex Code"></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Update;