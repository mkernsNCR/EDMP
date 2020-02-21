import React from 'react';
import { Redirect } from 'react-router-dom';

export class Root extends React.Component {
	render() {
		return <Redirect to="/dashboard" />;
	}
}

export default Root;
