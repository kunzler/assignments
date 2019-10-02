import React, { Component } from 'react';
import axios from 'axios';
const url = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"



class Quote3 extends Component {
    constructor() {
        super()
        this.state = {
            gotQuote: {}
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

    render() {
        const text = `${this.state.gotQuote.starWarsQuote}`;
        return (<div>{text}</div>)
    }
}


export default Quote3