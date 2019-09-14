import React, { Component } from 'react';
import InputTextField from '../InputTextField/InputTextField';
import BookResults from '../BookResults/BookResults';
import API from '../../utils/API';

class BookSearch extends Component {
	state = {
		bookSearch: ''
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		console.log(this.state.bookSearch);
		API.searchBooks(this.state.bookSearch).then((response) => {
		});
	};

	render() {
		return (
			<div>
				<div className="border p-3">
					<h3>Book Search</h3>
					<InputTextField handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
				</div>
				<BookResults />
			</div>
		);
	}
}

export default BookSearch;
