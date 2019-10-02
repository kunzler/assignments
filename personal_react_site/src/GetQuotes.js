import React, { Component } from 'react';
import axios from 'axios';

let url;
if (window.location.href.includes('quote1')) {
    url = "https://got-quotes.herokuapp.com/quotes"
} else if (window.location.href.includes('quote1')) {
    url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"
} else if (window.location.href.includes('quote3')) {
    url = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
}
class GetQuotes extends Component {
    constructor() {
        super()
        this.state = {
            gotQuote: null
        }
    }
    componentDidMount() {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.setState({
                    gotQuote: response.data

                })
            })
            .catch((error) => {
                console.error(error);
            })

    }
    handleClick() {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                this.setState({
                    gotQuote: response.data
                })
            })
            .catch((error) => {
                console.error(error);
            })
    }
    render() {
        const text = `"${this.state.gotQuote.quote}"
                -- ${this.state.gotQuote.character}`;
        return (
            <div>
                {text}
                <button onClick={() => this.handleClick()}>Next</button>
            </div>)
    }
}

export default GetQuotes