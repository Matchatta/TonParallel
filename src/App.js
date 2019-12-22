import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/nav_bar.js"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Buy from "./components/Buy.js"
import Home from "./components/Home.js"

class App extends Component{
  constructor(){
    super()
    this.state ={
      apiResponse : []
    }
  }

  render(){
    
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/buy" component={Buy} exact/>
            </Switch>
          </div> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
