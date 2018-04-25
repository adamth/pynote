import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pyNoteApp from './reducers';

import PyNote from './components/PyNote';
import NotFound from './components/NotFound';
// import logo from './logo.svg';
// import './App.css';

let store = createStore(pyNoteApp);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={PyNote} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
