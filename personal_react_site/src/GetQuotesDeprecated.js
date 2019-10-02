// import React, {Component} from 'react';
// import axios from 'axios';
// const url = "https://got-quotes.herokuapp.com/quotes"


// // import axios from 'axios'
// class GetQuotes extends Component {
//     constructor() {
//         super()
//         this.state = {
//             gotQuote: null
//         }
//     }
//     componentDidMount() {
//         let quote;
//         axios.get(url)
//             .then(response => {
//                 // console.log(response.data)
//                 console.log(this.props)
//                 this.setState({
//                     gotQuote: response.data
//                 })
//             })
//             .catch((error) => {
//                 console.error(error);
//             })
//     }
//     render() {
//         console.log(this.props)
//         return (<div>hi</div>)
//     }
// }


// export default GetQuotes