import React, {Component} from 'react';
import './App.css';
import Body from './components/Body/Body';
import Create from './components/Create Form/Create';
import Update from './components/Update Form/Update';
import Delete from './components/Delete Form/Delete';
import Brand from './components/Brand/Brand';
import Product from './components/Product/Product';
import Country from './components/Country/Country';
import { Route, Link, Switch } from "react-router-dom";

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
        return (
              <div className="App">

                <nav className="Menu">
                  <Link to="/" className="NavLink">Shades</Link>
                  <Link to="/brand" className="NavLink">Brands</Link>
                  <Link to="/product" className="NavLink">Products</Link>
                  <Link to="/group" className="NavLink">Countries</Link>
                </nav>
                <main>
                  <Switch>
                    <Route 
                      exact path="/"
                      render={routerProps => (
                        <div>
                          <div className="Forms">
                            <Create />
                            <Update />
                            <Delete />
                          </div>
                          <Body 
                            shades={this.state.shades}
                            {...routerProps}
                          />
                        </div>
                      )}
                    />
                    <Route
                      path="/brand"
                      render={routerProps => (
                        <Brand 
                          shades={this.state.shades}
                          {...routerProps}
                        />
                      )}
                    />
                    <Route
                      path="/product"
                      render={routerProps => (
                        <Product />
                      )}
                    />
                    <Route
                      path="/group"
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
