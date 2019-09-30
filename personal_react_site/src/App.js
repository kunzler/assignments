import React, { Component } from 'react';
import Axios from 'axios';
import Foot from './Foot';
import Nav from './Nav';
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
    Axios.get(url)
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
    // console.log(this.state.gotQuote.quote)
    return (
      <div className="App">
        <Nav />
        <p>{text}</p>
        <Foot />

      </div>
    );
  }
}
export default App;
