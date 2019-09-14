import React from 'react';

const InputTextField = props => {
	return (
		<div className="border form-group">
			<form className="text-center">
                <label htmlFor="bookSearch">Search</label>
                <input name="bookSearch" className="form-control container" onChange={props.handleInputChange}></input>
				<button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>
					Search!
				</button>
			</form>
		</div>
	);
}

export default InputTextField;

