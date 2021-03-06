import React from 'react';
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import configureStore, {history} from './store';
import App from './containers/App';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const store = configureStore();

const MainApp = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route path="/" component={App} />
      </Switch>
      <Footer />
    </ConnectedRouter>
  </Provider>;

export default MainApp;