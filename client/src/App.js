import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/pages/search';
import Saved from './components/pages/saved';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Jumbotron />
				<Switch>
					<Route exact path="/" component={Search} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/saved" component={Saved} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
