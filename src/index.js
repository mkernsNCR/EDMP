import React from 'react';
import ReactDOM from 'react-dom';

// Dependencies
import AppRouter from './config/routing/AppRouter';

// Styles
import { useStyles } from './styles';

const App = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<AppRouter />
		</React.Fragment>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
