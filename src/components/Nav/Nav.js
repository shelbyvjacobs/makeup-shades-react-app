import React, {Component} from 'react';
import "./Nav.css"

// class component
class Nav extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        apiUrl: "http://localhost:4000/shades",
        shades: []
      };
      this.componentDidMount = this.componentDidMount.bind(this);
    }
  
      componentDidMount(){
          fetch ('http://localhost:4000/shades', {
            headers: {
              'Accept': "application/json"
            }
          }
          )
          .then(res => res.json())
          .then(res => {
            this.setState({ shades: res });
          }) 
          .catch(err => console.log(err)); 
        }
  
  
      render(){
          return (
              <div className="Nav">
                  <nav>&#9776;</nav>
              </div>
          )
      }
  }

export default Nav;