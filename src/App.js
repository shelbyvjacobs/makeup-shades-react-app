import React, {Component} from 'react';
import './App.css';
import Body from './components/Body/Body';
import Brand from './components/Brand/Brand';
import Product from './components/Product/Product';
import Country from './components/Country/Country';
import { Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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
        }) 
        .catch(err => console.log(err)); 
      }


    render(){
      console.log(this.state)
        return (
              <div className="App">

                <nav className="Menu">
                  <Link to="/">Shades</Link>
                  <Link to="/brand">Brands</Link>
                  <Link to="/product">Products</Link>
                  <Link to="/country">Countries</Link>
                </nav>
                <main>
                  <Switch>
                    <Route 
                      exact path="/"
                      render={routerProps => (
                        <Body 
                          shades={this.state.shades}
                          {...routerProps}
                        />
                      )}
                    />
                    <Route
                      path="/brand"
                      render={routerProps => (
                        <Brand />
                      )}
                    />
                    <Route
                      path="/product"
                      render={routerProps => (
                        <Product />
                      )}
                    />
                    <Route
                      path="/country"
                      render={routerProps => (
                        <Country />
                      )}
                    />
                  </Switch>
                  <header className="Header">
                    <h1>Makeup Shades</h1>
                  </header>
                </main>

              </div>
        )
    }
}

export default App;
