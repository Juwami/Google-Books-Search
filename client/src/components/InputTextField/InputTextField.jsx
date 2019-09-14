import React from 'react';

const InputTextField = (props) => {
	return (
		<div className="form-group">
			<form >
				<label htmlFor="bookSearch">Search</label>
				<div className="d-flex p-3">
					<input name="bookSearch" className="form-control" onChange={props.handleInputChange} />
					<button type="submit" className="btn btn-primary float-right" onClick={props.handleSubmit}>
						Search!
					</button>
				</div>
			</form>
		</div>
	);
};

export default InputTextField;
