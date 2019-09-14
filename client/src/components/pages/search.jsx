import React from 'react';
import BookSearch from '../BookSearch/BookSearch'
import BookResults from '../BookResults/BookResults'

function Search() {
	return (
		<div>
			<BookSearch></BookSearch>
			<BookResults></BookResults>
		</div>
	);
}

export default Search;
