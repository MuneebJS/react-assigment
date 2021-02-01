import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MainApp from 'app/index';
import asyncComponent from 'util/asyncComponent';
import 'styles/app.scss';
class App extends Component {
	render() {
		const { match, location } = this.props;

		if (location.pathname === '/') {
			return <Redirect to={'/app/gists'} />;
		}

		return (
			<Switch>
				<Route path={`${match.url}app`} component={MainApp} />
				<Route component={asyncComponent(() => import('components/Error404'))} />
			</Switch>
		);
	}
}

export default connect(null)(App);
