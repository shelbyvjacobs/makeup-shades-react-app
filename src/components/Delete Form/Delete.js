//Class component

import React, {Component} from "react";

class Delete extends Component {
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
                    Delete a Shade: <br/>
                    <input type="text" placeholder="Hex Code"></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Delete;