import React from 'react';
import { Nav } from '../../components/nav';
import { BrowserRouter as Router } from 'react-router-dom';

const AppRouter = () => (
	<Router>
		<div style={{ width: '100vw', height: '100%' }} id="main">
			<Nav />
		</div>
	</Router>
);

export default AppRouter;
