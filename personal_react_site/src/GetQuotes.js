import React, { Component } from 'react';
import axios from 'axios';

let url;
if (window.location.href.includes('quote1')) {
    url = "https://got-quotes.herokuapp.com/quotes"
} else if (window.location.href.includes('quote2')) {
    url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"
} else if (window.location.href.includes('quote3')) {
    url = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
}
//let url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
//let url = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";
// let url = "https://got-quotes.herokuapp.com/quotes"

class GetQuotes extends Component {
    constructor() {
        super()
        this.state = {
            gotQuote: null,
            gotChar: null
        }
    }
    componentDidMount() {
        axios.get(url)
            .then(response => {
                //console.log(response.data)
                if (url === "https://got-quotes.herokuapp.com/quotes") {
                    //console.log(response.data.quote)
                    this.setState({
                        gotQuote: response.data.quote,
                        gotChar: response.data.character
                    })
                }
                console.log(response)
                if (url === "http://ron-swanson-quotes.herokuapp.com/v2/quotes") {
                    this.setState({
                        gotQuote: response.data,
                        gotChar: "Ron Swanson"
                    })
                }
                console.log(response.data)

                if (url === "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote") {

                    this.setState({
                        gotQuote: response.data.starWarsQuote,
                        gotChar: ""

                    })
                }
            })
            .catch((error) => {
                console.error(error);
            })

    }
    handleClick()  {
        axios.get(url)
            .then(response => {
                //console.log(response.data)
                if (url === "https://got-quotes.herokuapp.com/quotes") {
                    //console.log(response.data.quote)
                    this.setState({
                        gotQuote: response.data.quote,
                        gotChar: response.data.character
                    })
                }
                if (url === "http://ron-swanson-quotes.herokuapp.com/v2/quotes") {
                    console.log(response.data)
                    this.setState({
                        gotQuote: response.data
                        
                    })
                }
                if (url === "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote") {
                // console.log(response.data)
                    this.setState({
                        gotQuote: response.data.starWarsQuote,
                        gotChar: ""

                    })
                }

            })
            .catch((error) => {
                console.error(error);
            })

    }
    render() {
        const text = `${this.state.gotQuote} —${this.state.gotChar}`;
        return (
            <div>
                <p>{text}</p>
                <button onClick={() => this.handleClick()}onClick={() => window.location.reload(false)}>Next</button>
            </div>)
    }
}

export default GetQuotes