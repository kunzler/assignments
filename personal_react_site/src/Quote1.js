import React, { Component } from 'react';
import axios from 'axios';
const url = "https://got-quotes.herokuapp.com/quotes"


class Quote1 extends Component {
    constructor() {
        super()
        this.state = {
            gotQuote: {}
        }
    }
    componentDidMount() {
        this.setState({ loading: true })
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
        const text = `${this.state.gotQuote.quote}
                -- ${this.state.gotQuote.character}`;
        return (<div>{text}</div>)
    }
}


export default Quote1