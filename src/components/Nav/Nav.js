import React, {Component} from 'react';
import "./Nav.css"

// class component
class Nav extends Component {
    constructor(props){
      super(props);
  
      this.state = {

      };
      //bind here
    }

    // functionality here
  
      render(){
          return (
              <div className="Nav">
                  <nav>&#9776;</nav>
              </div>
          )
      }
  }

export default Nav;