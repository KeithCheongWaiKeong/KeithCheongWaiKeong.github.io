import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { NavBar, Home, Resume, Documentation, Contact } from './components';
import './App.css';

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
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/resume" component={Resume} />
						<Route exact path="/doc" component={Documentation} />
						<Route exact path="/contact" component={Contact} />
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
