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
    const text = this.state.loading ? "loading..." : `${this.state.gotQuote.quote}
                -- ${this.state.gotQuote.character}`;
    return (
      <div className="App">
        <Nav />
        <p>{text}</p>
        <Quote1 />
        <Quote2 />
        <Quote3 />
        <Foot />

      </div>
    );
  }
}
export default App;
