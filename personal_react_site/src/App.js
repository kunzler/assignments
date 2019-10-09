import React, { Component } from 'react';
import Foot from './Foot';
import Nav from './Nav';
import Quote1 from './Quote1.js'
import Quote2 from './Quote2.js'
import Quote3 from './Quote3.js'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" component={Quote1} />
            <Route path="/quote3" component={Quote3} />

            <Route path="/quote1" component={Quote1} />
            <Route path="/quote2" component={Quote2} />
          </Switch>
          <Foot />
        </div>
      </Router>
    );
  }
}
export default App;
