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
        this.setState({ loading: true })
        axios.get(url)
            .then(response => {
                console.log(response.data.starWarsQuote)
                this.setState({
                    gotQuote: response.data.starWarsQuote

                })
            })
            .catch((error) => {
                console.error(error);
            })

    }
    render() {
        const text = `"${this.state.gotQuote}"`;
        return (<div>{text}</div>)
    }
}


export default Quote3