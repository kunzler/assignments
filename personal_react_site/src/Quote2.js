import React, { Component } from 'react';
import axios from 'axios';
const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes"


class Quote2 extends Component {
    constructor() {
        super()
        this.state = {
            gotQuote: []
        }
    }
    componentDidMount() {
        axios.get(url)
            .then(response => {
                // console.log(response.data[0])
                this.setState({
                    gotQuote: response.data

                })
            })
            .catch((error) => {
                console.error(error);
            })

    }
    render() {
        const text = `${this.state.gotQuote[0]}--Ron Swanson`;
        console.log(text)
        return (<div>{text}</div>)
    }
}


export default Quote2