import React from 'react';

function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    <h3 className="display-4">Google Books</h3>
                </a>
				<ul className="nav">
					<li className="nav-item">
						<a href="/Search" className="nav-link active">Search</a>
					</li>
					<li className="nav-item">
						<a href="/Saved" className ="nav-link active">Saved</a>
					</li>
				</ul>
            </nav>
		</div>
	);
}

export default Navbar;
