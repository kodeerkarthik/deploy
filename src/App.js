import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Signup}></Route>
            <Route exact path='/signin' component={Signin}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route> 

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;



