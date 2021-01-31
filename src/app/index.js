import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from '../util/asyncComponent';


class App extends React.Component {
	render() {
		const { match } = this.props;
		return (
			<Switch>
				<Route path={`${match.url}/home`} component={asyncComponent(() => import('./routes/home'))} />
				<Route component={asyncComponent(() => import('components/Error404'))} />
			</Switch>
		);
	}
}

export default withRouter(connect(null)(App));
