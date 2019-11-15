import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body'

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
          console.log(res);
        }) 
        .catch(err => console.log(err)); 
      }


    render(){
        return (
            <div className="Nav">
              <div className="App">
                <Nav />
                <Body />
                <header className="App-header">
                  <h1>Makeup Shades</h1>
                </header>
              </div>
            </div>
        )
    }
}

export default App;
