import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body'
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiUrl: "http://localhost:4000/shades",
      proxyUrl: "https://cors-anywhere.herokuapp.com/",
      shades: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

    componentDidMount(){
        fetch ("http://localhost:4000/shades", {
          headers: {
            'Accept': "application/json"
          }
        }
        )
        .then(res => res.json())
        .then(res => {
          this.setState({ shades: res });
          // console.log(res);
        }) 
        .catch(err => console.log(err)); 
      }


    render(){

      let links = [
        { label: 'Home', link: '#home', active: true },
        { label: 'About', link: '#about' },
        { label: 'Portfolio', link: '#portfolio' },
        { label: 'Contact Us', link: '#contact-us' },
      ];

        return (
              <div className="App">
                <Nav links={links} />
                <Body shades={this.state.shades} />
                <header className="Header">
                  <h1>Makeup Shades</h1>
                </header>
              </div>
        )
    }
}

export default App;
