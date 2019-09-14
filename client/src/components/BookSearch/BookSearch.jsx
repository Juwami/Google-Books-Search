import React, { Component } from 'react';
import InputTextField from '../InputTextField/InputTextField';
import API from '../../utils/API'; 

class BookSearch extends Component {
	state = {
		bookSearch: ''
	};

	handleInputChange = event => {
        const { name, value } = event.target
        
        this.setState({
            [name] : value
        })
	};

	handleSubmit = event => {
        event.preventDefault();
        
        console.log(this.state.bookSearch)
        API.searchBooks(this.state.bookSearch).then(val => {
            console.log(val)
        })
		// this.setState({
		// 	searchedBook: {this.}
		// });
	};

	render() {
		return (
			<div className="border p-1">
				<h3>Book Search</h3>
				<InputTextField handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default BookSearch;
