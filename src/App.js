import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import './App.css';
import Home from './components';
import NavBar from './components/NavBar';

const theme = createTheme({
	palette: {
		primary: {
			main: '#112612',
			contrastText: '#FFBFCD',
		},
		secondary: {
			main: '#FFBFCD',
		},
	},
});

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<NavBar />
					<Home />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/resume" component={Home} />
						<Route exact path="/doc" component={Home} />
						<Route exact path="/contact" component={Home} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
