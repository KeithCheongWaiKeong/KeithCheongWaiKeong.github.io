import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Home from './components';

import './App.css';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Home />
			{/* <Switch>
				<Route exact path="/" component={Home} />
			</Switch> */}
		</React.Fragment>
	);
}

export default App;
