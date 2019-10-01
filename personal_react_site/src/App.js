import React, { Component } from 'react';
import axios from 'axios';
import Foot from './Foot';
import Nav from './Nav';
import Quote1 from './Quote1.js'
import Quote2 from './Quote2.js'
import Quote3 from './Quote3.js'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const url = "https://got-quotes.herokuapp.com/quotes"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      gotQuote: {}
    }
  }
  componentDidMount() {
    this.setState({ loading: true })
    axios.get(url)
      .then(response => {
        console.log(response.data)
        this.setState({
          loading: false,
          gotQuote: response.data
        })
      })
      .catch((error) => {
        console.error(error);
      })  
    }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Quote1} />
            <Route path="/quote1" component={Quote1} />
            <Route path="/quote2" component={Quote2} />
            <Route path="/quote3" component={Quote3} />
          </Switch>
          <Foot />
        </div>
      </Router>
    );
  }
}
export default App;
