import React, { Component } from 'react';
// import logo from "./logo.svg";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Jumbotron />
			</div>
		);
	}
}

export default App;
