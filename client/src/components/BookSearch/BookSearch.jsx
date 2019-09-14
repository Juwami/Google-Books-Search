import React, { Component } from 'react';

class BookSearch extends Component {
    state = {
        searchedBook: ''
    }

    render() {
        return (
            <div className="border">
                <h3>Book Search</h3>
                <label>Book</label>
            </div>
        )
    }
}

export default BookSearch
